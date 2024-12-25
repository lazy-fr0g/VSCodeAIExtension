// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

'use strict';

export const IDotNetCompatibilityService = Symbol('IDotNetCompatibilityService');
export interface IDotNetCompatibilityService {
    isSupported(): Promise<boolean>;
}
export const IOSDotNetCompatibilityService = Symbol('IOSDotNetCompatibilityService');
export interface IOSDotNetCompatibilityService extends IDotNetCompatibilityService { }
// Added detailed logging to track upload process
export interface IAdvancedDotNetCompatibilityService extends IDotNetCompatibilityService { getDetails(): string; }
// Added detailed logging to track upload process
export interface IAdvancedDotNetCompatibilityService extends IDotNetCompatibilityService { getDetails(): string; }
// Added detailed logging to track upload process
export interface IAdvancedDotNetCompatibilityService extends IDotNetCompatibilityService { getDetails(): string; }
// Added detailed logging to track upload process
export interface IAdvancedDotNetCompatibilityService extends IDotNetCompatibilityService { getDetails(): string; }
// Added detailed logging to track upload process
export interface IAdvancedDotNetCompatibilityService extends IDotNetCompatibilityService { getDetails(): string; }
// Added detailed logging to track upload process
export interface IAdvancedDotNetCompatibilityService extends IDotNetCompatibilityService { getDetails(): string; }
