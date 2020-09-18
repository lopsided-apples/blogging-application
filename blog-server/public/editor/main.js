(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/preview/preview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'edit/:id', component: _edit_edit_component__WEBPACK_IMPORTED_MODULE_2__["EditComponent"] },
    { path: 'preview/:id', component: _preview_preview_component__WEBPACK_IMPORTED_MODULE_3__["PreviewComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<div style=\"display: inline-block; vertical-align:top;\">\n\t\t<app-list></app-list>\n\t</div>\n\t<div style=\"display: inline-block; vertical-align:top;\">\n\t\t<router-outlet></router-outlet>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'angular-blog';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./list/list.component */ "./src/app/list/list.component.ts");
/* harmony import */ var _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit/edit.component */ "./src/app/edit/edit.component.ts");
/* harmony import */ var _preview_preview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./preview/preview.component */ "./src/app/preview/preview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _list_list_component__WEBPACK_IMPORTED_MODULE_5__["ListComponent"],
                _edit_edit_component__WEBPACK_IMPORTED_MODULE_6__["EditComponent"],
                _preview_preview_component__WEBPACK_IMPORTED_MODULE_7__["PreviewComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/blog.service.ts":
/*!*********************************!*\
  !*** ./src/app/blog.service.ts ***!
  \*********************************/
/*! exports provided: BlogService, Post */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogService", function() { return BlogService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return Post; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogService = /** @class */ (function () {
    function BlogService(router) {
        this.router = router;
        this.POSTS = [];
        this.username = this.getUsername();
        this.posts = this.POSTS;
        //this.fetchPosts(this.username);
    }
    BlogService.prototype.fetchPosts = function (username) {
        var _this = this;
        return fetch('http://localhost:3000/api/' + username, {
            method: 'GET',
            credentials: 'include'
        })
            .then(function (response) { return response.json(); })
            .catch(function () {
            //window.location.href = 'http://localhost:3000/login?redirect=/editor/';
        })
            .then(function (response) {
            _this.posts.length = 0;
            response['body'].forEach(function (post) {
                var copy = JSON.parse(JSON.stringify(post));
                _this.posts.push(copy);
            });
        });
    };
    BlogService.prototype.getPosts = function (username) {
        return this.posts;
    };
    BlogService.prototype.getPost = function (username, id) {
        var result = this.posts.filter(function (post) { return post.postid == id; });
        if (result.length === 0) {
            return null;
        }
        else {
            return result[0];
        }
    };
    BlogService.prototype.newPost = function (username) {
        var _this = this;
        var newPostId = this.getMaxPostId() + 1;
        var time = Date.now();
        var newPost = new Post();
        newPost.postid = newPostId;
        newPost.created = time;
        newPost.modified = time;
        newPost.title = '';
        newPost.body = '';
        this.posts.push(newPost);
        return fetch('http://localhost:3000/api/' + username + '/' + newPostId.toString(), {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: "", body: "" })
        })
            .then(function (response) {
            if (response.status === 201) {
                // success
                return newPost;
            }
            else {
                for (var i = _this.posts.length - 1; i >= 0; i--) {
                    if (_this.posts[i].postid === newPostId) {
                        _this.posts.splice(i, 1);
                    }
                }
                alert('Status: ' + response.status.toString() + ', Error creating post at server!');
                _this.router.navigate(['/']);
                return null;
            }
        });
    };
    BlogService.prototype.updatePost = function (username, post) {
        var _this = this;
        var result = this.posts.filter(function (p) { return p.postid == post.postid; });
        if (result.length != 1) {
            return Promise.resolve();
        }
        var orig = JSON.parse(JSON.stringify(result[0]));
        result[0].modified = Date.now();
        result[0].title = post.title;
        result[0].body = post.body;
        return fetch('http://localhost:3000/api/' + username + '/' + post.postid.toString(), {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(post)
        })
            .then(function (response) {
            if (response.status === 200) {
                // Success
            }
            else {
                alert('Status: ' + response.status.toString() + ', Error updating post at server!');
                result[0].modified = orig.modified;
                result[0].title = orig.title;
                result[0].body = orig.body;
                // DONE: route to edit page
                _this.router.navigate(['/', 'edit', orig.postid]);
            }
        });
    };
    BlogService.prototype.deletePost = function (username, postid) {
        var _this = this;
        var result = this.posts.filter(function (p) { return p.postid == postid; });
        if (result.length != 1)
            return;
        var orig = JSON.parse(JSON.stringify(result[0]));
        for (var i = this.posts.length - 1; i >= 0; i--) {
            if (this.posts[i].postid === postid) {
                this.posts.splice(i, 1);
            }
        }
        return fetch('http://localhost:3000/api/' + username + '/' + postid.toString(), {
            method: 'DELETE',
            credentials: 'include',
        })
            .then(function (response) {
            if (response.status === 204) {
            }
            else {
                _this.posts.push(orig);
                alert('Status: ' + response.status.toString() + ', Error deleting post at server!');
                // DONE: ROUTE TO '/' here
                _this.router.navigate(['/']);
            }
        });
    };
    BlogService.prototype.getMaxPostId = function () {
        var maxId = 0;
        this.posts.forEach(function (post) {
            if (post.postid > maxId)
                maxId = post.postid;
        });
        return maxId;
    };
    BlogService.prototype.getUsername = function () {
        if (!document.cookie)
            return null;
        var token = parseJWT(document.cookie);
        var username = token.usr;
        if (username) {
            return username;
        }
        else {
            return null;
        }
    };
    BlogService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], BlogService);
    return BlogService;
}());

var Post = /** @class */ (function () {
    function Post() {
    }
    return Post;
}());

function parseJWT(token) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(atob(base64));
}


/***/ }),

/***/ "./src/app/edit/edit.component.css":
/*!*****************************************!*\
  !*** ./src/app/edit/edit.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "label{\n\tfont-size: medium;\n\tcolor: #607D8B;\n\tdisplay: block;\n\tpadding-top: 1em;\n}\n\ninput{\n\tfont-size: medium;\n\theight: 2em;\n\twidth: 8em;\n}\n\ntextarea{\n\theight: 8em;\n\twidth: 30em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdC9lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLGVBQWU7Q0FDZixpQkFBaUI7Q0FDakI7O0FBRUQ7Q0FDQyxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLFdBQVc7Q0FDWDs7QUFFRDtDQUNDLFlBQVk7Q0FDWixZQUFZO0NBQ1oiLCJmaWxlIjoic3JjL2FwcC9lZGl0L2VkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImxhYmVse1xuXHRmb250LXNpemU6IG1lZGl1bTtcblx0Y29sb3I6ICM2MDdEOEI7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRwYWRkaW5nLXRvcDogMWVtO1xufVxuXG5pbnB1dHtcblx0Zm9udC1zaXplOiBtZWRpdW07XG5cdGhlaWdodDogMmVtO1xuXHR3aWR0aDogOGVtO1xufVxuXG50ZXh0YXJlYXtcblx0aGVpZ2h0OiA4ZW07XG5cdHdpZHRoOiAzMGVtO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/edit/edit.component.html":
/*!******************************************!*\
  !*** ./src/app/edit/edit.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <label for=\"title\">Title:</label>\n    <input id=\"title\" [(ngModel)]=\"post.title\" placeholder=\"title\"/>\n</div>\n<div>\n  <label for=\"body\">Body:</label>\n    <textarea id=\"body\" [(ngModel)]=\"post.body\" placeholder=\"body\"></textarea>\n</div>\n<p>Last Modified: {{post.modified | date:'M/d/yyyy h:mm:ss a'}}</p>\n<div>\n\t<button (click)=\"delete()\">Delete</button>\n\t<button (click)=\"save()\">Save</button>\n\t<button (click)=\"preview()\">Preview</button>\n</div>\n"

/***/ }),

/***/ "./src/app/edit/edit.component.ts":
/*!****************************************!*\
  !*** ./src/app/edit/edit.component.ts ***!
  \****************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditComponent = /** @class */ (function () {
    function EditComponent(route, blogService, router) {
        this.route = route;
        this.blogService = blogService;
        this.router = router;
        this.id = +this.route.snapshot.paramMap.get('id');
    }
    EditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username = this.blogService.getUsername();
        //this.post = this.blogService.getPost(this.username, this.id);
        this.route.params.subscribe(function (params) {
            if (_this.post) {
                _this.save();
            }
            // console.log(this.post);
            // let promise = new Promise<void>((resolve, reject) => {});
            // if(this.post) {
            //   promise = this.blogService.updatePost(this.username, JSON.parse(JSON.stringify(this.post)));
            // } else {
            //   promise = Promise.resolve();
            // }
            // this.post = new Post();
            // this.post.title = '';
            // this.post.body = '';
            // promise.then(() => {
            _this.id = Number(params.id);
            //this.blogService.fetchPosts(this.username)
            //.then(() => {this.post = this.blogService.getPost(this.username, this.id);});
            _this.post = _this.blogService.getPost(_this.username, _this.id);
            if (!_this.post) {
                _this.post = new _blog_service__WEBPACK_IMPORTED_MODULE_1__["Post"]();
                _this.post.title = '';
                _this.post.body = '';
                _this.blogService.fetchPosts(_this.username)
                    .then(function () {
                    _this.post = _this.blogService.getPost(_this.username, _this.id);
                    if (!_this.post) {
                        _this.router.navigate(['/']);
                    }
                    else {
                        _this.origTitle = _this.post.title.slice(0);
                        _this.origBody = _this.post.body.slice(0);
                    }
                });
            }
            else {
                _this.origTitle = _this.post.title.slice(0);
                _this.origBody = _this.post.body.slice(0);
            }
            // });
        });
    };
    EditComponent.prototype.ngOnDestroy = function () {
        if (this.post) {
            this.save();
        }
    };
    EditComponent.prototype.delete = function () {
        this.blogService.deletePost(this.username, this.id);
        this.post = null;
        this.router.navigate(['/']);
    };
    EditComponent.prototype.save = function () {
        if (this.post.title === this.origTitle && this.post.body === this.origBody)
            return;
        this.blogService.updatePost(this.username, this.post);
        this.post = this.blogService.getPost(this.username, this.id);
        this.origTitle = this.post.title.slice(0);
        this.origBody = this.post.body.slice(0);
    };
    EditComponent.prototype.preview = function () {
        this.save();
        this.router.navigate(['/preview/' + this.id]);
    };
    EditComponent.prototype.onUnload = function () {
        if (this.post) {
            this.save();
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:beforeunload'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], EditComponent.prototype, "onUnload", null);
    EditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/edit/edit.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/list/list.component.css":
/*!*****************************************!*\
  !*** ./src/app/list/list.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".selected {\n  background-color: #CFD8DC !important;\n  color: white;\n}\n.posts {\n  margin: 0 0 2em 0;\n  list-style-type: none;\n  padding: 0;\n  width: 15em;\n}\n.posts li {\n  cursor: pointer;\n  position: relative;\n  left: 0;\n  background-color: #EEE;\n  margin: .5em;\n  padding: .3em 0;\n  height: 1.6em;\n  border-radius: 4px;\n}\n.posts li.selected:hover {\n  background-color: #BBD8DC !important;\n  color: white;\n}\n.posts li:hover {\n  color: #607D8B;\n  background-color: #DDD;\n  left: .1em;\n}\n.posts .text {\n  position: relative;\n  top: -3px;\n}\n.posts .modified {\n  display: inline-block;\n  font-size: small;\n  color: white;\n  padding: 0.8em 0.7em 0 0.7em;\n  background-color: #607D8B;\n  line-height: 1em;\n  position: relative;\n  left: -1px;\n  top: -4px;\n  height: 1.8em;\n  margin-right: .8em;\n  border-radius: 4px 0 0 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlzdC9saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQ0FBcUM7RUFDckMsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxZQUFZO0NBQ2I7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsUUFBUTtFQUNSLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxtQkFBbUI7Q0FDcEI7QUFFRDtFQUNFLHFDQUFxQztFQUNyQyxhQUFhO0NBQ2Q7QUFFRDtFQUNFLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsV0FBVztDQUNaO0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsVUFBVTtDQUNYO0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsMEJBQTBCO0VBQzFCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFVBQVU7RUFDVixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLDJCQUEyQjtDQUM1QiIsImZpbGUiOiJzcmMvYXBwL2xpc3QvbGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NGRDhEQyAhaW1wb3J0YW50O1xuICBjb2xvcjogd2hpdGU7XG59XG4ucG9zdHMge1xuICBtYXJnaW46IDAgMCAyZW0gMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTVlbTtcbn1cbi5wb3N0cyBsaSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICBtYXJnaW46IC41ZW07XG4gIHBhZGRpbmc6IC4zZW0gMDtcbiAgaGVpZ2h0OiAxLjZlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4ucG9zdHMgbGkuc2VsZWN0ZWQ6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJEOERDICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBvc3RzIGxpOmhvdmVyIHtcbiAgY29sb3I6ICM2MDdEOEI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNEREQ7XG4gIGxlZnQ6IC4xZW07XG59XG5cbi5wb3N0cyAudGV4dCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtM3B4O1xufVxuXG4ucG9zdHMgLm1vZGlmaWVkIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IHNtYWxsO1xuICBjb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDAuOGVtIDAuN2VtIDAgMC43ZW07XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MDdEOEI7XG4gIGxpbmUtaGVpZ2h0OiAxZW07XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogLTFweDtcbiAgdG9wOiAtNHB4O1xuICBoZWlnaHQ6IDEuOGVtO1xuICBtYXJnaW4tcmlnaHQ6IC44ZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/list/list.component.html":
/*!******************************************!*\
  !*** ./src/app/list/list.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<button (click)=\"newPost()\">New Post</button>\n<ul class=\"posts\">\n  <li *ngFor=\"let post of posts\" routerLink=\"/edit/{{post.postid}}\">\n  \t<a style=\"text-decoration: none; color: #607D8B\">\n\t  \t<span class=\"modified\">{{post.created | date:'M/d/yyyy h:mm:ss a'}}</span> {{post.title}}\n\t </a>\n  </li>\n</ul>"

/***/ }),

/***/ "./src/app/list/list.component.ts":
/*!****************************************!*\
  !*** ./src/app/list/list.component.ts ***!
  \****************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListComponent = /** @class */ (function () {
    function ListComponent(blogService, router) {
        this.blogService = blogService;
        this.router = router;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username = this.blogService.getUsername();
        if (!this.username) {
            //window.location.href = 'http://localhost:3000/login?redirect=/editor/';
        }
        this.blogService.fetchPosts(this.username)
            .then(function () {
            _this.getPosts();
        });
    };
    ListComponent.prototype.getPosts = function () {
        //this.blogService.fetchPosts(this.username)
        //.then(() => { 
        this.posts = this.blogService.getPosts(this.username);
        //});
        //this.blogService.getPosts(this.username).subscribe(posts => this.posts = posts);
    };
    ListComponent.prototype.newPost = function () {
        var _this = this;
        this.blogService.newPost(this.username)
            .then(function (post) {
            _this.getPosts();
            return post;
        })
            .then(function (post) { _this.router.navigate(['/', 'edit', post.postid]); });
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_blog_service__WEBPACK_IMPORTED_MODULE_1__["BlogService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/preview/preview.component.css":
/*!***********************************************!*\
  !*** ./src/app/preview/preview.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByZXZpZXcvcHJldmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/preview/preview.component.html":
/*!************************************************!*\
  !*** ./src/app/preview/preview.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<button routerLink=\"/edit/{{post.postid}}\"> Edit </button>\n<h3 [innerHTML]=\"titleHtml\">\n</h3>\n<div [innerHTML]=\"bodyHtml\">\n</div>"

/***/ }),

/***/ "./src/app/preview/preview.component.ts":
/*!**********************************************!*\
  !*** ./src/app/preview/preview.component.ts ***!
  \**********************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var commonmark__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! commonmark */ "../../../node_modules/commonmark/lib/index.js");
/* harmony import */ var commonmark__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(commonmark__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _blog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../blog.service */ "./src/app/blog.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreviewComponent = /** @class */ (function () {
    function PreviewComponent(route, blogService) {
        this.route = route;
        this.blogService = blogService;
    }
    PreviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.username = this.blogService.getUsername();
        this.reader = new commonmark__WEBPACK_IMPORTED_MODULE_1__["Parser"];
        this.writer = new commonmark__WEBPACK_IMPORTED_MODULE_1__["HtmlRenderer"];
        this.route.params.subscribe(function (params) {
            _this.post = _this.blogService.getPost(_this.username, params.id);
            _this.renderPost();
        });
    };
    PreviewComponent.prototype.renderPost = function () {
        this.titleHtml = this.writer.render(this.reader.parse(this.post.title));
        this.bodyHtml = this.writer.render(this.reader.parse(this.post.body));
    };
    PreviewComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preview',
            template: __webpack_require__(/*! ./preview.component.html */ "./src/app/preview/preview.component.html"),
            styles: [__webpack_require__(/*! ./preview.component.css */ "./src/app/preview/preview.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _blog_service__WEBPACK_IMPORTED_MODULE_2__["BlogService"]])
    ], PreviewComponent);
    return PreviewComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/cs144/shared/Part-4/angular-blog/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map