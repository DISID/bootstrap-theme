
AUI().ready(

	// This function gets loaded when all the HTML, not including the portlets, is
	// loaded.

	function() {
	}

);

Liferay.Portlet.ready(


	// This function gets loaded after each and every portlet on the page.

	// portletId: the current portlet's id
	// node: the Alloy Node object of the current portlet

	function(portletId, node) {
	}
);

Liferay.on(
	'allPortletsReady',
	/*
	This function gets loaded when everything, including the portlets, is on
	the page.
	Nota: Liferay ya carga por defecto el evento document.ready()
	*/
	function() {
	}
);

//Load the DOM of document when init the page

jQuery(document).ready(function(){
	prettyPrint();
	initBootstrap();
});


/*
 *   make code in page pretty
 */
/*
function prettyPrint(){
	window.prettyPrint && prettyPrint();
};
*/

/*
 *  Init code javascript bootstrap
 */
function initBootstrap(){
    log("Charge initBootstrap");

    //Disable certain links in docs
    //jQuery('span9 section [href^=#]').click(function (e) {
    //	e.preventDefault();
    //});

    // events tooltip of the page

    jQuery("a[rel=tooltip]").tooltip();
    jQuery("span[rel=tooltip]").tooltip();
    jQuery('.tooltip').tooltip();
    jQuery('.tooltip-top').tooltip({
		placement: 'top'
	});
    jQuery('.tooltip-bottom').tooltip({
		placement: 'bottom'
	});
    jQuery('.tooltip-left').tooltip({
		placement: 'left'
	});
    jQuery('.tooltip-right').tooltip({
		placement: 'right'
	});

	// init element of carosel in the page "Que hacemos"
    jQuery('.carousel').carousel({
		interval: false
	});

    // init popover
    jQuery('.link-popover').popover();
    jQuery("a[rel=popover]")
      .popover()
      .click(function(e) {
        e.preventDefault();
    });

    // button state
    jQuery('.fat-btn')
    	.click(function () {
    		var btn = $(this)
            btn.button('loading')
            setTimeout(function () {
            	btn.button('reset')
         }, 3000)
    });

	// Assign class bootstrap for document html
    jQuery('abbr').addClass('initialism');
    jQuery('table').addClass('table table-hover');
    jQuery('hr').addClass('divider');
    jQuery('ul.breadcrumbs').addClass('breadcrumb');
    jQuery('ul.breadcrumbs li.last').addClass('active');
    jQuery('ul.breadcrumbs li.last a').addClass('active');
    jQuery('h1.portlet-title').addClass('page-header');
    jQuery('div.page-links').addClass('pagination');
    jQuery('span.portlet-msg').addClass('label');
    jQuery('span.portlet-msg-help').addClass('label label-info');
    jQuery('span.lfr-message-help').addClass('label label-info');
    jQuery('span.portlet-msg-progress').addClass('label label-inverse');
    jQuery('span.lfr-message-progress').addClass('label label-inverse');
    jQuery('span.portlet-msg-info').addClass('label label-info');
    jQuery('span.portlet-msg-error').addClass('label label-important');
    jQuery('span.lfr-message-error').addClass('label label-important');
    jQuery('span.portlet-msg-alert').addClass('label label-warning');
    jQuery('span.lfr-message-alert').addClass('label label-warning');
    jQuery('span.portlet-msg-success').addClass('label label-success');
    jQuery('span.lfr-message-success').addClass('label label-success');
    jQuery('input[type=submit]').addClass('btn btn-large btn-primary');
    jQuery('button[type=button]').addClass('btn btn-large');
    jQuery('input.aui-button-input').addClass('btn btn-large btn-primary');
    jQuery('input[name*="_3_keywords"]').addClass('search-query');

	// advertencias js
    jQuery('popup-alert-warning').addClass('alert alert-error');

//	jQuery('').addClass('alert');
//	jQuery('').addClass('alert alert-success');
//	jQuery('').addClass('alert alert-info');
//	jQuery('').addClass('well');
//	jQuery('').addClass('close');
//  jQuery('').addClass('well');
//  jQuery('').addClass('close');

};


