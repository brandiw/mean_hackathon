(function() {
	angular.module("VerdictApp")
	.component("ideaGen", {
		templateUrl: "app/components/ideaGen/ideaGen.html",
		controller: IdeaGen,
		controllerAs: "ideaGen"
	});

	function IdeaGen(IdeaGenService) {
		var ideaGen = this;
		ideaGen.idea = "";
		ideaGen.test = "Test";

		// IdeaGenService.getIdea()
		// 	.then(function(res) {
		// 		console.log("Response in controller", res);
		// 		ideaGen.idea = res;
		// 	});

	};


	IdeaGen.$inject = ["IdeaGenService"];
})()