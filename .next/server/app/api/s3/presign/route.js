/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/s3/presign/route";
exports.ids = ["app/api/s3/presign/route"];
exports.modules = {

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fs3%2Fpresign%2Froute&page=%2Fapi%2Fs3%2Fpresign%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fs3%2Fpresign%2Froute.ts&appDir=%2FUsers%2Fpashin%2FDesktop%2FBAs%20ek%20final%20zariya%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fpashin%2FDesktop%2FBAs%20ek%20final%20zariya&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fs3%2Fpresign%2Froute&page=%2Fapi%2Fs3%2Fpresign%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fs3%2Fpresign%2Froute.ts&appDir=%2FUsers%2Fpashin%2FDesktop%2FBAs%20ek%20final%20zariya%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fpashin%2FDesktop%2FBAs%20ek%20final%20zariya&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D! ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_pashin_Desktop_BAs_ek_final_zariya_src_app_api_s3_presign_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/s3/presign/route.ts */ \"(rsc)/./src/app/api/s3/presign/route.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Users_pashin_Desktop_BAs_ek_final_zariya_src_app_api_s3_presign_route_ts__WEBPACK_IMPORTED_MODULE_3__]);\n_Users_pashin_Desktop_BAs_ek_final_zariya_src_app_api_s3_presign_route_ts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"standalone\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/s3/presign/route\",\n        pathname: \"/api/s3/presign\",\n        filename: \"route\",\n        bundlePath: \"app/api/s3/presign/route\"\n    },\n    resolvedPagePath: \"/Users/pashin/Desktop/BAs ek final zariya/src/app/api/s3/presign/route.ts\",\n    nextConfigOutput,\n    userland: _Users_pashin_Desktop_BAs_ek_final_zariya_src_app_api_s3_presign_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZzMyUyRnByZXNpZ24lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnMzJTJGcHJlc2lnbiUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnMzJTJGcHJlc2lnbiUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnBhc2hpbiUyRkRlc2t0b3AlMkZCQXMlMjBlayUyMGZpbmFsJTIwemFyaXlhJTJGc3JjJTJGYXBwJnBhZ2VFeHRlbnNpb25zPXRzeCZwYWdlRXh0ZW5zaW9ucz10cyZwYWdlRXh0ZW5zaW9ucz1qc3gmcGFnZUV4dGVuc2lvbnM9anMmcm9vdERpcj0lMkZVc2VycyUyRnBhc2hpbiUyRkRlc2t0b3AlMkZCQXMlMjBlayUyMGZpbmFsJTIwemFyaXlhJmlzRGV2PXRydWUmdHNjb25maWdQYXRoPXRzY29uZmlnLmpzb24mYmFzZVBhdGg9JmFzc2V0UHJlZml4PSZuZXh0Q29uZmlnT3V0cHV0PXN0YW5kYWxvbmUmcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDeUI7QUFDdEc7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGLHFDIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi9Vc2Vycy9wYXNoaW4vRGVza3RvcC9CQXMgZWsgZmluYWwgemFyaXlhL3NyYy9hcHAvYXBpL3MzL3ByZXNpZ24vcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwic3RhbmRhbG9uZVwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9zMy9wcmVzaWduL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvczMvcHJlc2lnblwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvczMvcHJlc2lnbi9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9wYXNoaW4vRGVza3RvcC9CQXMgZWsgZmluYWwgemFyaXlhL3NyYy9hcHAvYXBpL3MzL3ByZXNpZ24vcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fs3%2Fpresign%2Froute&page=%2Fapi%2Fs3%2Fpresign%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fs3%2Fpresign%2Froute.ts&appDir=%2FUsers%2Fpashin%2FDesktop%2FBAs%20ek%20final%20zariya%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fpashin%2FDesktop%2FBAs%20ek%20final%20zariya&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/s3/presign/route.ts":
/*!*****************************************!*\
  !*** ./src/app/api/s3/presign/route.ts ***!
  \*****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST),\n/* harmony export */   dynamic: () => (/* binding */ dynamic),\n/* harmony export */   runtime: () => (/* binding */ runtime)\n/* harmony export */ });\n/* harmony import */ var _google_cloud_storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @google-cloud/storage */ \"@google-cloud/storage\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_google_cloud_storage__WEBPACK_IMPORTED_MODULE_0__]);\n_google_cloud_storage__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\nconst runtime = \"nodejs\";\nconst dynamic = \"force-dynamic\";\n\n\nlet _storage = null;\nfunction getStorage() {\n    if (!_storage) {\n        const projectId = process.env.GCP_PROJECT_ID;\n        const clientEmail = process.env.GCP_CLIENT_EMAIL;\n        const privateKey = process.env.GCP_PRIVATE_KEY?.replace(/\\\\n/g, '\\n');\n        if (!projectId || !clientEmail || !privateKey) {\n            throw new Error(\"GCP environment variables not configured properly.\");\n        }\n        _storage = new _google_cloud_storage__WEBPACK_IMPORTED_MODULE_0__.Storage({\n            projectId,\n            credentials: {\n                client_email: clientEmail,\n                private_key: privateKey\n            }\n        });\n    }\n    return _storage;\n}\nasync function POST(req) {\n    try {\n        console.log(\"Route hit: /api/s3/presign (now using GCS)\");\n        const { filename, contentType } = await req.json();\n        if (!filename) {\n            return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n                error: 'Filename is required'\n            }, {\n                status: 400\n            });\n        }\n        const bucketName = process.env.GCS_BUCKET;\n        if (!bucketName) {\n            throw new Error(\"GCS_BUCKET environment variable not configured properly.\");\n        }\n        console.log(\"GCS Bucket Name:\", bucketName);\n        const sanitizedFilename = filename.replace(/[^a-zA-Z0-9.-]/g, '_');\n        const isAudio = contentType && contentType.startsWith('audio/');\n        const objectKey = isAudio ? `audio/${Date.now()}-${sanitizedFilename}` : `products/${Date.now()}-${sanitizedFilename}`;\n        const file = getStorage().bucket(bucketName).file(objectKey);\n        console.log(\"Calling GCP service: Cloud Storage (generate signed URL)\");\n        const [uploadUrl] = await file.getSignedUrl({\n            version: 'v4',\n            action: 'write',\n            expires: Date.now() + 60 * 60 * 1000,\n            contentType: contentType || 'application/octet-stream'\n        });\n        console.log(\"GCP call success. Generated URL length:\", uploadUrl.length);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            uploadUrl,\n            objectKey\n        });\n    } catch (error) {\n        console.error(\"API error:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json({\n            error: \"Internal server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9zMy9wcmVzaWduL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQU8sTUFBTUEsVUFBVSxTQUFTO0FBQ3pCLE1BQU1DLFVBQVUsZ0JBQWdCO0FBRVM7QUFDUTtBQUV4RCxJQUFJRyxXQUEyQjtBQUUvQixTQUFTQztJQUNQLElBQUksQ0FBQ0QsVUFBVTtRQUNiLE1BQU1FLFlBQVlDLFFBQVFDLEdBQUcsQ0FBQ0MsY0FBYztRQUM1QyxNQUFNQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLGdCQUFnQjtRQUNoRCxNQUFNQyxhQUFhTCxRQUFRQyxHQUFHLENBQUNLLGVBQWUsRUFBRUMsUUFBUSxRQUFRO1FBRWhFLElBQUksQ0FBQ1IsYUFBYSxDQUFDSSxlQUFlLENBQUNFLFlBQVk7WUFDN0MsTUFBTSxJQUFJRyxNQUFNO1FBQ2xCO1FBRUFYLFdBQVcsSUFBSUYsMERBQU9BLENBQUM7WUFDckJJO1lBQ0FVLGFBQWE7Z0JBQUVDLGNBQWNQO2dCQUFhUSxhQUFhTjtZQUFXO1FBQ3BFO0lBQ0Y7SUFDQSxPQUFPUjtBQUNUO0FBRU8sZUFBZWUsS0FBS0MsR0FBZ0I7SUFDekMsSUFBSTtRQUNGQyxRQUFRQyxHQUFHLENBQUM7UUFFWixNQUFNLEVBQUVDLFFBQVEsRUFBRUMsV0FBVyxFQUFFLEdBQUcsTUFBTUosSUFBSUssSUFBSTtRQUVoRCxJQUFJLENBQUNGLFVBQVU7WUFDYixPQUFPcEIscURBQVlBLENBQUNzQixJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBdUIsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQzVFO1FBRUEsTUFBTUMsYUFBYXJCLFFBQVFDLEdBQUcsQ0FBQ3FCLFVBQVU7UUFDekMsSUFBSSxDQUFDRCxZQUFZO1lBQ2YsTUFBTSxJQUFJYixNQUFNO1FBQ2xCO1FBRUFNLFFBQVFDLEdBQUcsQ0FBQyxvQkFBb0JNO1FBRWhDLE1BQU1FLG9CQUFvQlAsU0FBU1QsT0FBTyxDQUFDLG1CQUFtQjtRQUM5RCxNQUFNaUIsVUFBVVAsZUFBZUEsWUFBWVEsVUFBVSxDQUFDO1FBQ3RELE1BQU1DLFlBQVlGLFVBQ2QsQ0FBQyxNQUFNLEVBQUVHLEtBQUtDLEdBQUcsR0FBRyxDQUFDLEVBQUVMLG1CQUFtQixHQUMxQyxDQUFDLFNBQVMsRUFBRUksS0FBS0MsR0FBRyxHQUFHLENBQUMsRUFBRUwsbUJBQW1CO1FBRWpELE1BQU1NLE9BQU8vQixhQUFhZ0MsTUFBTSxDQUFDVCxZQUFZUSxJQUFJLENBQUNIO1FBRWxEWixRQUFRQyxHQUFHLENBQUM7UUFDWixNQUFNLENBQUNnQixVQUFVLEdBQUcsTUFBTUYsS0FBS0csWUFBWSxDQUFDO1lBQzFDQyxTQUFTO1lBQ1RDLFFBQVE7WUFDUkMsU0FBU1IsS0FBS0MsR0FBRyxLQUFLLEtBQUssS0FBSztZQUNoQ1gsYUFBYUEsZUFBZTtRQUM5QjtRQUNBSCxRQUFRQyxHQUFHLENBQUMsMkNBQTJDZ0IsVUFBVUssTUFBTTtRQUV2RSxPQUFPeEMscURBQVlBLENBQUNzQixJQUFJLENBQUM7WUFBRWE7WUFBV0w7UUFBVTtJQUNsRCxFQUFFLE9BQU9QLE9BQVk7UUFDbkJMLFFBQVFLLEtBQUssQ0FBQyxjQUFjQTtRQUM1QixPQUFPdkIscURBQVlBLENBQUNzQixJQUFJLENBQUM7WUFBRUMsT0FBTztRQUF3QixHQUFHO1lBQUVDLFFBQVE7UUFBSTtJQUM3RTtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvcGFzaGluL0Rlc2t0b3AvQkFzIGVrIGZpbmFsIHphcml5YS9zcmMvYXBwL2FwaS9zMy9wcmVzaWduL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBydW50aW1lID0gXCJub2RlanNcIjtcbmV4cG9ydCBjb25zdCBkeW5hbWljID0gXCJmb3JjZS1keW5hbWljXCI7XG5cbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAZ29vZ2xlLWNsb3VkL3N0b3JhZ2UnO1xuaW1wb3J0IHsgTmV4dFJlcXVlc3QsIE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJztcblxubGV0IF9zdG9yYWdlOiBTdG9yYWdlIHwgbnVsbCA9IG51bGw7XG5cbmZ1bmN0aW9uIGdldFN0b3JhZ2UoKTogU3RvcmFnZSB7XG4gIGlmICghX3N0b3JhZ2UpIHtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBwcm9jZXNzLmVudi5HQ1BfUFJPSkVDVF9JRDtcbiAgICBjb25zdCBjbGllbnRFbWFpbCA9IHByb2Nlc3MuZW52LkdDUF9DTElFTlRfRU1BSUw7XG4gICAgY29uc3QgcHJpdmF0ZUtleSA9IHByb2Nlc3MuZW52LkdDUF9QUklWQVRFX0tFWT8ucmVwbGFjZSgvXFxcXG4vZywgJ1xcbicpO1xuXG4gICAgaWYgKCFwcm9qZWN0SWQgfHwgIWNsaWVudEVtYWlsIHx8ICFwcml2YXRlS2V5KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHQ1AgZW52aXJvbm1lbnQgdmFyaWFibGVzIG5vdCBjb25maWd1cmVkIHByb3Blcmx5LlwiKTtcbiAgICB9XG5cbiAgICBfc3RvcmFnZSA9IG5ldyBTdG9yYWdlKHtcbiAgICAgIHByb2plY3RJZCxcbiAgICAgIGNyZWRlbnRpYWxzOiB7IGNsaWVudF9lbWFpbDogY2xpZW50RW1haWwsIHByaXZhdGVfa2V5OiBwcml2YXRlS2V5IH0sXG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIF9zdG9yYWdlO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gUE9TVChyZXE6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc29sZS5sb2coXCJSb3V0ZSBoaXQ6IC9hcGkvczMvcHJlc2lnbiAobm93IHVzaW5nIEdDUylcIik7XG5cbiAgICBjb25zdCB7IGZpbGVuYW1lLCBjb250ZW50VHlwZSB9ID0gYXdhaXQgcmVxLmpzb24oKTtcblxuICAgIGlmICghZmlsZW5hbWUpIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiAnRmlsZW5hbWUgaXMgcmVxdWlyZWQnIH0sIHsgc3RhdHVzOiA0MDAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgYnVja2V0TmFtZSA9IHByb2Nlc3MuZW52LkdDU19CVUNLRVQ7XG4gICAgaWYgKCFidWNrZXROYW1lKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHQ1NfQlVDS0VUIGVudmlyb25tZW50IHZhcmlhYmxlIG5vdCBjb25maWd1cmVkIHByb3Blcmx5LlwiKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhcIkdDUyBCdWNrZXQgTmFtZTpcIiwgYnVja2V0TmFtZSk7XG5cbiAgICBjb25zdCBzYW5pdGl6ZWRGaWxlbmFtZSA9IGZpbGVuYW1lLnJlcGxhY2UoL1teYS16QS1aMC05Li1dL2csICdfJyk7XG4gICAgY29uc3QgaXNBdWRpbyA9IGNvbnRlbnRUeXBlICYmIGNvbnRlbnRUeXBlLnN0YXJ0c1dpdGgoJ2F1ZGlvLycpO1xuICAgIGNvbnN0IG9iamVjdEtleSA9IGlzQXVkaW9cbiAgICAgID8gYGF1ZGlvLyR7RGF0ZS5ub3coKX0tJHtzYW5pdGl6ZWRGaWxlbmFtZX1gXG4gICAgICA6IGBwcm9kdWN0cy8ke0RhdGUubm93KCl9LSR7c2FuaXRpemVkRmlsZW5hbWV9YDtcblxuICAgIGNvbnN0IGZpbGUgPSBnZXRTdG9yYWdlKCkuYnVja2V0KGJ1Y2tldE5hbWUpLmZpbGUob2JqZWN0S2V5KTtcblxuICAgIGNvbnNvbGUubG9nKFwiQ2FsbGluZyBHQ1Agc2VydmljZTogQ2xvdWQgU3RvcmFnZSAoZ2VuZXJhdGUgc2lnbmVkIFVSTClcIik7XG4gICAgY29uc3QgW3VwbG9hZFVybF0gPSBhd2FpdCBmaWxlLmdldFNpZ25lZFVybCh7XG4gICAgICB2ZXJzaW9uOiAndjQnLFxuICAgICAgYWN0aW9uOiAnd3JpdGUnLFxuICAgICAgZXhwaXJlczogRGF0ZS5ub3coKSArIDYwICogNjAgKiAxMDAwLCAvLyAxIGhvdXJcbiAgICAgIGNvbnRlbnRUeXBlOiBjb250ZW50VHlwZSB8fCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhcIkdDUCBjYWxsIHN1Y2Nlc3MuIEdlbmVyYXRlZCBVUkwgbGVuZ3RoOlwiLCB1cGxvYWRVcmwubGVuZ3RoKTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IHVwbG9hZFVybCwgb2JqZWN0S2V5IH0pO1xuICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgY29uc29sZS5lcnJvcihcIkFQSSBlcnJvcjpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIkludGVybmFsIHNlcnZlciBlcnJvclwiIH0sIHsgc3RhdHVzOiA1MDAgfSk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJydW50aW1lIiwiZHluYW1pYyIsIlN0b3JhZ2UiLCJOZXh0UmVzcG9uc2UiLCJfc3RvcmFnZSIsImdldFN0b3JhZ2UiLCJwcm9qZWN0SWQiLCJwcm9jZXNzIiwiZW52IiwiR0NQX1BST0pFQ1RfSUQiLCJjbGllbnRFbWFpbCIsIkdDUF9DTElFTlRfRU1BSUwiLCJwcml2YXRlS2V5IiwiR0NQX1BSSVZBVEVfS0VZIiwicmVwbGFjZSIsIkVycm9yIiwiY3JlZGVudGlhbHMiLCJjbGllbnRfZW1haWwiLCJwcml2YXRlX2tleSIsIlBPU1QiLCJyZXEiLCJjb25zb2xlIiwibG9nIiwiZmlsZW5hbWUiLCJjb250ZW50VHlwZSIsImpzb24iLCJlcnJvciIsInN0YXR1cyIsImJ1Y2tldE5hbWUiLCJHQ1NfQlVDS0VUIiwic2FuaXRpemVkRmlsZW5hbWUiLCJpc0F1ZGlvIiwic3RhcnRzV2l0aCIsIm9iamVjdEtleSIsIkRhdGUiLCJub3ciLCJmaWxlIiwiYnVja2V0IiwidXBsb2FkVXJsIiwiZ2V0U2lnbmVkVXJsIiwidmVyc2lvbiIsImFjdGlvbiIsImV4cGlyZXMiLCJsZW5ndGgiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/s3/presign/route.ts\n");

/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "@google-cloud/storage":
/*!****************************************!*\
  !*** external "@google-cloud/storage" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@google-cloud/storage");;

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@opentelemetry"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fs3%2Fpresign%2Froute&page=%2Fapi%2Fs3%2Fpresign%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fs3%2Fpresign%2Froute.ts&appDir=%2FUsers%2Fpashin%2FDesktop%2FBAs%20ek%20final%20zariya%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fpashin%2FDesktop%2FBAs%20ek%20final%20zariya&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=standalone&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();