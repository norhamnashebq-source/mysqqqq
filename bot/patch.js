const dns = require("dns");
const GBAN_HOST = "filthy-milzie-beb-bot-e9c14634.koyeb.app";

const origLookup = dns.lookup.bind(dns);
dns.lookup = function (hostname, options, callback) {
  if (hostname === GBAN_HOST) {
    const cb = typeof options === "function" ? options : callback;
    return setImmediate(() => cb(null, "127.0.0.1", 4));
  }
  return origLookup(hostname, options, callback);
};

const origResolve4 = dns.resolve4.bind(dns);
dns.resolve4 = function (hostname, options, callback) {
  if (hostname === GBAN_HOST) {
    const cb = typeof options === "function" ? options : callback;
    return setImmediate(() => cb(null, ["127.0.0.1"]));
  }
  return origResolve4(hostname, options, callback);
};

const http = require("http");
const https = require("https");
const { PassThrough } = require("stream");

const FAKE_BODY = JSON.stringify({ success: true, data: [] });

function makeFakeReq(callback) {
  const res = new PassThrough();
  res.statusCode = 200;
  res.statusMessage = "OK";
  res.headers = { "content-type": "application/json" };
  res.push(FAKE_BODY);
  res.push(null);
  const fakeReq = new PassThrough();
  fakeReq.end = function () { return fakeReq; };
  fakeReq.write = function () { return fakeReq; };
  fakeReq.setTimeout = function () { return fakeReq; };
  fakeReq.abort = function () {};
  fakeReq.destroy = function () {};
  if (typeof callback === "function") {
    setImmediate(() => callback(res));
  }
  return fakeReq;
}

function getHost(options) {
  if (typeof options === "string") {
    try { return new URL(options).hostname; } catch (_) { return ""; }
  }
  return options.hostname || (options.host && options.host.split(":")[0]) || "";
}

function patchModule(mod) {
  const orig = mod.request.bind(mod);
  mod.request = function (options, callback) {
    if (getHost(options) === GBAN_HOST) {
      return makeFakeReq(callback);
    }
    return orig(options, callback);
  };
  const origGet = mod.get.bind(mod);
  mod.get = function (options, callback) {
    if (getHost(options) === GBAN_HOST) {
      return makeFakeReq(callback);
    }
    return origGet(options, callback);
  };
}

patchModule(http);
patchModule(https);
