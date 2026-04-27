(function () {
    "use strict";
    'use strict';


  //  var app = angular.module('viewCustom', ['angularLoad']);

    var app = angular.module('viewCustom', ['angularLoad']);

    /****************************************************************************************************/

        /*In case of CENTRAL_PACKAGE - comment out the below line to replace the other module definition*/

        /*var app = angular.module('centralCustom', ['angularLoad']);*/

    /****************************************************************************************************/


/***************************************************************/

/*  01SUNY_BCC:01SUNY_BCC view */

/*add report a problem*/
  app.controller('prmActionListAfterController', ['$scope', function ($scope) {
    var vm = this;
    vm.$onInit = function () {
      vm.prmActionCtrl.actionLabelNamesMap["report_a_problem"] = "Report a Problem";
      vm.prmActionCtrl.actionIconNamesMap["report_a_problem"] = "report_a_problem";
      vm.prmActionCtrl.actionIcons["report_a_problem"] = {
        icon: "ic_announcement_24px",
        iconSet: "action",
        type: "svg"
      };
      //TODO - what about if something gets added to this list - may need to refactor for loop
      if (!vm.prmActionCtrl.actionListService.actionsToIndex["report_a_problem"]) {
        vm.prmActionCtrl.actionListService.requiredActionsList.unshift("report_a_problem");
        vm.prmActionCtrl.actionListService.actionsToDisplay.unshift("report_a_problem");
        vm.prmActionCtrl.actionListService.actionsToIndex["report_a_problem"] = 1;
      }
        var url = "https://sunybroome.libwizard.com/f/report-a-problem?5327305=" + vm.prmActionCtrl.item.pnx.display.title[0] + " (https://suny-bcc.primo.exlibrisgroup.com/discovery/fulldisplay?" + encodeURIComponent("docid=" + vm.prmActionCtrl.item.pnx.control.recordid + "&vid=01SUNY_BCC:01SUNY_BCC&onCampus=true") + ")";

      if (vm.prmActionCtrl.actionListService.onToggle) {
        vm.prmActionCtrl.actionListService.onToggle["report_a_problem"] = function () {
          window.open(url, '_blank');
        };
      }
      if (vm.prmActionCtrl.onToggle) {
        vm.prmActionCtrl.onToggle["report_a_problem"] = function () {
          window.open(url, '_blank');
        };
      }
    };
  }]);
  app.component('prmActionListAfter', {
    require: {
      prmActionCtrl: '^prmActionList'
    },
    controller: 'prmActionListAfterController'
  });

  app.controller('prmBriefResultContainerAfterController', ['$scope', function ($scope) {
    var vm = this;
    vm.$onInit = function () {
      vm.prmBriefResultCtrl.upFrontActionsService.actionIconNamesMap["report_a_problem"] = "report_a_problem";
      vm.prmBriefResultCtrl.upFrontActionsService.actionLabelNamesMap["report_a_problem"] = "Report a Database Problem";
      vm.prmBriefResultCtrl.actionsIcons["report_a_problem"] = {
        icon: "ic_announcement_24px",
        iconSet: "action",
        type: "svg"
      };
      //TODO - what about if something gets added to this list - may need to refactor for loop
      var index = vm.prmBriefResultCtrl.upFrontActionsService.requiredUpFrontActionsList.length;
      if (vm.prmBriefResultCtrl.upFrontActionsService.requiredUpFrontActionsList[0] != "report_a_problem") {
        // ensure we aren't duplicating the entry
        if (index > 1) {
          vm.prmBriefResultCtrl.upFrontActionsService.requiredUpFrontActionsList[index - (index - 2)] = vm.prmBriefResultCtrl.upFrontActionsService.requiredUpFrontActionsList[1];
        }
        vm.prmBriefResultCtrl.upFrontActionsService.requiredUpFrontActionsList[index - (index - 1)] = vm.prmBriefResultCtrl.upFrontActionsService.requiredUpFrontActionsList[0];
        vm.prmBriefResultCtrl.upFrontActionsService.requiredUpFrontActionsList[0] = "report_a_problem";
      }

        var url = "https://sunybroome.libwizard.com/f/report-a-problem?5327305=" + vm.prmBriefResultCtrl.item.pnx.display.title[0] + " (https://suny-bcc.primo.exlibrisgroup.com/discovery/fulldisplay?" + encodeURIComponent("docid=" + vm.prmBriefResultCtrl.item.pnx.control.recordid + "&vid=01SUNY_BCC:01SUNY_BCC&onCampus=true") + ")";
	
      vm.prmBriefResultCtrl.openTab = function (e, t) {
        e.stopPropagation();
        if (t == "report_a_problem") {
          window.open(url, '_blank');
        } else {
          this.openItemMenu(e);
          this.selectedAction = t;
        }
      };
    };
  }]);
  app.component('prmBriefResultContainerAfter', {
    require: {
      prmBriefResultCtrl: '^prmBriefResultContainer'
    },
    controller: 'prmBriefResultContainerAfterController'
  });
  /*end add report a problem*/







/*----------below is the code for libchat-----------*/
             //    Adds the chat button
                (function() {
                                var lc = document.createElement('script'); lc.type = 'text/javascript'; lc.async = 'true';
                                lc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'sunybroome.libanswers.com/load_chat.php?hash=991dd24c6880638febed3c9c6197c2b00b303cae1f02bb7c6384ecd0abf1d2a4';
                                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(lc, s);
                })();
/*---------------libchat code ends here---------------*/




// Begin BrowZine - Primo Integration... Option 2
  window.browzine = {
    libraryId: "3957",
// sharing our API key with the world :(    
    apiKey: "03c6f2c7-5df3-472f-844a-653162738363",

    journalCoverImagesEnabled: true,

    journalBrowZineWebLinkTextEnabled: true,
    journalBrowZineWebLinkText: "View Journal Contents",

    articleBrowZineWebLinkTextEnabled: true,
    articleBrowZineWebLinkText: "View Issue Contents",

    articlePDFDownloadLinkEnabled: true,
    articlePDFDownloadLinkText: "Download PDF",

    articleLinkEnabled: true,
    articleLinkText: "Read Article",

    printRecordsIntegrationEnabled: true,

    showFormatChoice: true,
    showLinkResolverLink: false,
    enableLinkOptimizer: true,

    articleRetractionWatchEnabled: true,
    articleRetractionWatchText: "Retracted Article",

    articleExpressionOfConcernEnabled: true,
    articleExpressionOfConcernText: "Expression of Concern",
    problematicJournalEnabled: true,
    problematicJournalText: "This Is A Problematic Journal",
    documentDeliveryFulfillmentText: "Request PDF",

    unpaywallEmailAddressKey: "enter-your-email@your-institution-domain.edu",
    articlePDFDownloadViaUnpaywallEnabled: true,
    articlePDFDownloadViaUnpaywallText: "Download PDF (via Unpaywall)",
    articleLinkViaUnpaywallEnabled: true,
    articleLinkViaUnpaywallText: "Read Article (via Unpaywall)",
    articleAcceptedManuscriptPDFViaUnpaywallEnabled: true,
    articleAcceptedManuscriptPDFViaUnpaywallText: "Download PDF (Accepted Manuscript via Unpaywall)",
    articleAcceptedManuscriptArticleLinkViaUnpaywallEnabled: true,
    articleAcceptedManuscriptArticleLinkViaUnpaywallText: "Read Article (Accepted Manuscript via Unpaywall)",
  };
  browzine.script = document.createElement("script");
  browzine.script.src = "https://s3.amazonaws.com/browzine-adapters/primo/browzine-primo-adapter.js";
  document.head.appendChild(browzine.script);
  app.controller('prmSearchResultAvailabilityLineAfterController', function($scope) {
    window.browzine.primo.searchResult($scope);
  });
  app.component('prmSearchResultAvailabilityLineAfter', {
    bindings: { parentCtrl: '<' },
    controller: 'prmSearchResultAvailabilityLineAfterController'
  });
// ... End BrowZine - Primo Integration







/* Hide/Show Other Institutions Button - Pacific University

prmAlmaMoreInstAfter  = prmAlmaOtherMembersAfter

 */

  app.component('prmAlmaOtherMembersAfter', {
    bindings: {parentCtrl: '<'},
    controller: function () {
      this.$onInit = function () {
        angular.element(document.querySelector('prm-alma-other-members md-tabs')).addClass("hide");
      };
    },
    template: '<div class="hide_show_other_institutions_container"><button class="hide_show_other_institutions_button" onclick="hide_show_other_institutions()">Show Other SUNY Libraries</button></div>'
  });

})();

function hide_show_other_institutions()
{
  if(angular.element(document.querySelector('prm-alma-other-members md-tabs')).hasClass("hide"))
  {
    angular.element(document.querySelector('prm-alma-other-members md-tabs')).removeClass("hide");
    angular.element(document.getElementsByClassName('hide_show_other_institutions_button')).text("Hide Libraries");
  }
  else
  {
    angular.element(document.querySelector('prm-alma-other-members md-tabs')).addClass("hide");
    angular.element(document.getElementsByClassName('hide_show_other_institutions_button')).text("Show Libraries");
  }

  // place button above list of libraries
  angular.element(document.querySelector('prm-alma-other-members-after')).after(angular.element(document.querySelector('prm-alma-other-members md-tabs')));
}





