import { FederationHost, Module } from "@module-federation/enhanced/runtime";

export interface RemotesWithVersion {
  name: string;
  version: string;
}

export interface RemotesWithEntry {
  name: string;
  entry: string;
}

export interface RemoteInfoCommon {
  alias?: string;
  shareScope?: string;
  type?: RemoteEntryType;
  entryGlobalName?: string;
}

export type RemoteEntryType =
  | "var"
  | "module"
  | "assign"
  | "assign-properties"
  | "this"
  | "window"
  | "self"
  | "global"
  | "commonjs"
  | "commonjs2"
  | "commonjs-module"
  | "commonjs-static"
  | "amd"
  | "amd-require"
  | "umd"
  | "umd2"
  | "jsonp"
  | "system"
  | string;

export type Remote = (RemotesWithEntry | RemotesWithVersion) & RemoteInfoCommon;

export type ShareArgs =
  | (SharedBaseArgs & { get: SharedGetter })
  | (SharedBaseArgs & { lib: () => Module });

export type SharedBaseArgs = {
  version?: string;
  shareConfig?: any;
  scope?: string | Array<string>;
  deps?: Array<string>;
  loaded?: boolean;
};

export type SharedGetter = (() => () => Module) | (() => Promise<() => Module>);

export type InitOptions = {
  // The name of the current consumer
  name: string;
  // The list of remote modules to depend on
  // When using the version content, it needs to be used with snapshot, which is still under construction
  remotes: Array<Remote>;
  // The list of dependencies that the current consumer needs to share
  // When using the build plugin, users can configure the dependencies to be shared in the build plugin, and the build plugin will inject the shared dependencies into the runtime sharing configuration
  // Shared must be manually passed in the version instance when passed at runtime because it cannot be directly passed at runtime.
  shared?: {
    [pkgName: string]: ShareArgs | ShareArgs[];
  };
  // Sharing strategy, which strategy will be used to decide whether to reuse the dependency
  shareStrategy?: "version-first" | "loaded-first";
};

export type ErrorLoadRemoteOptions = {
  id: string;
  error: unknown;
  options?: any;
  from: "build" | "runtime";
  lifecycle: "onLoad" | "beforeRequest";
  origin: FederationHost;
};
