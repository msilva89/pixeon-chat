angular.module("pixeonChat").config(function ($httpProvider) {
	$httpProvider.interceptors.push("loadingInterceptor");
});