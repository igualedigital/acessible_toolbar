/**
 * @file ToolSet de elemenentos para acessibilidade
 * @author Rogério Chiavegatti <web@iguale.com.br>
 * @version 1.0.0
 * @copyright Iguale Digital Acessibilidade
 */

// Define Global Object acessibleAssets
/** @global */

// proDef libras
var wl;

// html toolbar
var htmlToolBar;
var htmlFooterLogos;
var barColorSet;

if(!window.acessibleAssets){
	window.acessibleAssets = {};
}

if(!window.acessibleDialog){
	window.acessibleDialog = {};
}

if(!window.acessibleFocus){
	window.acessibleFocus = {};
}

var $ = jQuery.noConflict();

/** 
* @function  Object Cria uma lista para selos de certificação de código semântico e conformidade.
* @method validatorsItens
* @param {string} element - Elemento HTML ao qual será associada a lista de selos de acessibilidade
* @param {string} position - Posição da lista de selos, "after" ou "before". Referente ao elemento associado.
* @param {bool} typeElements - Tipo de lista exibida False - exibe os selos (w3c HTML5,w3c CSS3,WCAG totalvalidator)
* @return {bool} true
*/

acessibleAssets.validatorsItens = function(element,position,typeElements){

	var URL_site = window.location.href;

	htmlFooterLogos = "";
	htmlFooterLogos = htmlFooterLogos +"";
	
	htmlFooterLogos = htmlFooterLogos +"<ul class=\"acessibility-certifications-list\">";
	if (!typeElements){
	htmlFooterLogos = htmlFooterLogos +"<li>";
	htmlFooterLogos = htmlFooterLogos +"<a href=\"http://validator.w3.org/check?uri="+URL_site+"\"  target=\"_blank\">";
	htmlFooterLogos = htmlFooterLogos +"<img src=\"http://digital.iguale.com.br/accessibility/assets/img/selo-html5.png\"  alt=\"Selo do validador online da W3C para HTML5 - Um retângulo dividido em duas partes: À esquerda um fundo branco com a abreviação W3C. à direita o logotipo do HMTL 5 em laranja sobre um fundo amarelo. Este selo significa que o código HTML desta página não contém erros.\" title=\"Selo do validador W3C para HTML5 - HTML5 Válido, sem erros.\">";
	htmlFooterLogos = htmlFooterLogos +"</a>";
	htmlFooterLogos = htmlFooterLogos +"</li>";
	htmlFooterLogos = htmlFooterLogos +"<li>";
	htmlFooterLogos = htmlFooterLogos +"<a href=\"http://jigsaw.w3.org/css-validator/check/referer\" target=\"_blank\">";
	htmlFooterLogos = htmlFooterLogos +"<img src=\"http://digital.iguale.com.br/accessibility/assets/img/selo-css.png\" alt=\"Selo do validador online da W3C para CSS - Um retângulo dividido em duas partes: à esquerda um fundo branco com a abreviação W3C. À dreita as letras CSS escritas em preto sobre um fundo amarelo. Este selo significa que o código CSS desta página não contém erros.\" title=\"Selo do validador W3C para CSS - CSS válido, sem erros.\">";
	htmlFooterLogos = htmlFooterLogos +"</a>";
	htmlFooterLogos = htmlFooterLogos +"</li>";
	htmlFooterLogos = htmlFooterLogos +"<li>";
	htmlFooterLogos = htmlFooterLogos +"<img src=\"http://digital.iguale.com.br/accessibility/assets/img/selo-wcag2.png\" alt=\"Selo do software TotalValidatorPro para WCAG - Um retângulo dividido em duas partes: À esquerda sobre um fundo branco está o logotipo representativo do software Total Validator Pro. À direta sobre um fundo azul claro está escrito WCAG 2.0 AA. Este selo significa que esta página atende aos critérios básicos de acessibilidade para pessoas com necessidades especiais.\" title=\"Selo do software Total Validator Pro - Este site atende as diretrizes de acessibilidade WCAG 2.0 AA\">";
	htmlFooterLogos = htmlFooterLogos +"</li>";
	}else{
		htmlFooterLogos = htmlFooterLogos +"<li>";
		htmlFooterLogos = htmlFooterLogos +"<a href=\"http://digital.iguale.com.br/feedback?u="+URL_site+"\"  target=\"_blank\">";
		htmlFooterLogos = htmlFooterLogos +"<img src=\"http://digital.iguale.com.br/assets/selo-iguale-acessivel.png\" alt=\"Selo Iguale de validação de acessibilidade  - Um retângulo dividido em duas partes: À esquerda sobre um fundo branco está o logotipo representativo da acessibilidade. À direta sobre um fundo azul claro está o logo da Iguale Digital. Este selo significa que este site sofreu modificações para melhorar sua acessibilidade.\" title=\"Selo de acessibilidade Iguale Digital - Este site atende as diretrizes de acessibilidade WCAG e foi desenvolvido com base nas diretrizes da W3C\">";
		htmlFooterLogos = htmlFooterLogos +"</a>";
		htmlFooterLogos = htmlFooterLogos +"</li>";
	}
	htmlFooterLogos = htmlFooterLogos +"</ul>";
	

	if(position == 'after'){
		$(htmlFooterLogos).insertAfter(element);
	}else{
		$(htmlFooterLogos).insertBefore(element);	
	}

	return true;
}

acessibleAssets.acessibleToolBar = function(){

	htmlToolBar = "";
	htmlToolBar = htmlToolBar +"";

	htmlToolBar = htmlToolBar +"<div id=\"acessibleToolBar\" data-accessibility=\"toolBar\">";
	htmlToolBar = htmlToolBar +"<div id=\"acessibility-complementary-info\" class=\"infoAcessibilidade\" style=\"display:none;\">";
	htmlToolBar = htmlToolBar +"<h1><i class=\"fa fa-wheelchair-alt\" aria-hidden=\"true\"></i> Atalhos acessíveis deste site</h1>";
	htmlToolBar = htmlToolBar +"<p>";
	htmlToolBar = htmlToolBar +"Este site segue boas práticas de acessibilidade para oferecer a melhor experiência possível para todos os usuários.<br>";
	htmlToolBar = htmlToolBar +"Através de recursos que facilitam a navegação e utilização por pessoas com necessidades especiais.";
	htmlToolBar = htmlToolBar +"</p>";
	htmlToolBar = htmlToolBar +"<p>A qualquer momento, quando estiver navegando você poderá utilizar os seguintes atalhos.</p>";
	htmlToolBar = htmlToolBar +"<h2><strong>Utilizando Sistema Operacional Microsoft Windows</strong></h2>";
	htmlToolBar = htmlToolBar +"<p>Os atalhos abaixo funcionam nos navegadores <strong><em>Google Chrome</em></strong> e <strong><em>Internet Explorer.</em></strong></p>";
	htmlToolBar = htmlToolBar +"<p>No navegador<strong><em>Mozilla Firefox</em></strong>, você deverá utilizar a tecla shift seguida das teclas indicadas nos atalhos (por exemplo: <strong>Shift + alt + 1</strong>).</p> ";
	htmlToolBar = htmlToolBar +"<p>No <strong><em>Opera Browser</em></strong>, você deverá substituir a teclha alt pela tecla escape (ex: <strong>Shift + escape + 1</strong>).</p>";
	htmlToolBar = htmlToolBar +"<ul>";
	htmlToolBar = htmlToolBar +"<li><strong>ALT + 1</strong> - Acesso direto ao conteúdo principal da página atual.</li>";
	htmlToolBar = htmlToolBar +"<li><strong>ALT + 2</strong> - Acesso direto ao menu principal de navegação.</li>";
	htmlToolBar = htmlToolBar +"<li><strong>ALT + 3</strong> - Alternar o esquema de cores do site para alto constraste.</li>";
	htmlToolBar = htmlToolBar +"<li><strong>ALT + 4</strong> - Aumentar o tamanho do texto.</li>";
	htmlToolBar = htmlToolBar +"<li><strong>ALT + 5</strong> - Retornar aos padrões de tamanho do Texto.</li>";
	htmlToolBar = htmlToolBar +"<li><strong>ALT + 6</strong> - Acesso direto a este conteúdo.</li>";
	htmlToolBar = htmlToolBar +"<li><strong>CTRL +</strong> Aumentar o Zoom do navegador.</li>";
	htmlToolBar = htmlToolBar +"<li><strong>CTRL -</strong> Reduzir o Zoom do navegador.</li>";
	htmlToolBar = htmlToolBar +"</ul>";
	htmlToolBar = htmlToolBar +"<br>";
	htmlToolBar = htmlToolBar +"<p style=\"float:left;\"> Desenvolvimento:</p> ";
	htmlToolBar = htmlToolBar +"<a href=\"http://digital.iguale.com.br\" target=\"_blank\">";
	htmlToolBar = htmlToolBar +"<img style=\"float:left;border:none; vertical-align:middle;margin:4px;\" src=\"http://digital.iguale.com.br/assets/logo-iguale-digital.png\" width=\"32\" height=\"32\" alt=\"Logotipo da Iguale Digital - Um círculo azul escrito Iguale no centro e digital logo abaixo alinhando a direita.\" title=\"Iguale Digital\"></a>";
	htmlToolBar = htmlToolBar +"</div>";

	htmlToolBar = htmlToolBar +"<nav id=\"acessivel_toolbar\" class=\"acessivel_navbar\">";
	htmlToolBar = htmlToolBar +"<ul>";
	htmlToolBar = htmlToolBar +"<li><a id=\"acc-go-to-main-content\" href=\"#mainContent\" aria-label=\"Atalho para acesso direto ao conteúdo principal\"><i class=\"fa fa-arrow-circle-o-right\" aria-hidden=\"true\"></i> Ir para o conteúdo</a></li>";
	htmlToolBar = htmlToolBar +"<li><a id=\"acc-go-to-main-nav\" href=\"#mainNavigation\" aria-label=\"Atalho para acesso direto ao menu principal\"><i class=\"fa fa-arrow-circle-o-right\" aria-hidden=\"true\"></i> Ir para o menu principal</a></li>";
	htmlToolBar = htmlToolBar +"<li>Tamanho do texto: <a id=\"acc-increase-font-size\" href=\"#\" accesskey=\"4\"><i class=\"fa fa-font\" aria-hidden=\"true\" aria-label=\"Aumentar o tamanho do texto\"></i> +</a> | <a id=\"acc-normalize-font-size\" href=\"#\" accesskey=\"5\" aria-label=\"Retornar o tamanho do texto ao padrão normal\"><i class=\"fa fa-font\" aria-hidden=\"true\"></i>-</a></li>";
	htmlToolBar = htmlToolBar +"<li><a id=\"acc-contrast-toogle\" href=\"#\" accesskey=\"3\" data-highContrast=\"false\"><i class=\"fa fa-adjust\" aria-hidden=\"true\" aria-label=\"Exibir o conteúdo em Alto Contraste\"></i> <span id=\"txtContrast\"> Contraste</span></a></li>";
	htmlToolBar = htmlToolBar +"<li id=\"acessibilityInfoBlock\"><a href=\"#\" id=\"accessibilityInfo\" accesskey=\"6\"><i class=\"fa fa-wheelchair-alt\" aria-hidden=\"true\" aria-label=\"Orientações sobre o uso de atalhos neste site.\"></i> Atalhos</a></li>";
	htmlToolBar = htmlToolBar +"<li id=\"developmentByBlock\"><a href=\"#\" id=\"developmentBy\" accesskey=\"7\"><i id=\"icon-equals\" class=\"icon-equal\" aria-hidden=\"true\" aria-label=\"Esta barra foi desenvolvida pela Iguale Digital acessibilidade.\"></i> </a> </li>";
	htmlToolBar = htmlToolBar +"</ul>";
	htmlToolBar = htmlToolBar +"</nav>";
	htmlToolBar = htmlToolBar +"</div>";

	return htmlToolBar;
}

acessibleAssets.setcolor = function(arg){
		
	switch (arg) {
		case 2:
			$('#acessivel_toolbar').addClass('toolbar-colorset2');
			$("#icon-equals").removeClass().addClass("icon-equal2");
			break;
		case 3:
			$('#acessivel_toolbar').addClass('toolbar-colorset3');
			$("#icon-equals").removeClass().addClass("icon-equal3");
			break;
	}

	return;
}

// Scroll page to top;
acessibleAssets.scrollToTopPage = function(arg){

		//console.log('scroll page to top:',arg);

	if (!arg || $(window).width() <= 360){
		return false;
	}

	htmlTscroll = "";
	htmlTscroll = htmlTscroll +"";
	htmlTscroll = htmlTscroll +" <a id=\"acc-scroll-to-top\" href=\"#\" class=\"acc-scrollToTop\" aria-label=\"Atalho para o topo da página.\">Ir para o topo da página</a>";
	$('body').append(htmlTscroll);

	var tr_gototop = $("#acc-scroll-to-top");

	// Scroll page to top
	$(window).scroll(function(){
		if ($(this).scrollTop() > 120 && $(window).width() > 360) {
			tr_gototop.fadeIn();
		} else {
			tr_gototop.fadeOut();
		}
	});
	
	//Click event to scroll to top
	tr_gototop.click(function(){
		$('html, body').animate({scrollTop : 0},800);
		return false;
	});

}

acessibleAssets.acessibilize = function(toolbar,libras_prodef,appendBarTo,colorOptions){

	// active element focus
	//	acessibleFocus.elementFocus();

	barColorSet = colorOptions;

    // Check if is mobile device
	function ismobile(){
		if(/android|webos|iphone|blackberry|opera mini|Windows Phone|iemobile|WPDesktop|XBLWP7/i.test(navigator.userAgent.toLowerCase())) {
			return true;
				}else{
			return false;
		}
	}


    // if is mobile device detectect dont create accessibleToolBar accessible toolbar.
	//console.log('é mobile:',ismobile());

    if(!ismobile()){
    //console.log("Criar a barra de acessibilidade.");

	// Load acessible toolBar
	if (toolbar){
		
		var html_acessible_bar = acessibleAssets.acessibleToolBar();
		
		if(!appendBarTo){
			appendBarTo = "body";

		}
		$(appendBarTo).prepend(html_acessible_bar);
		acessibleAssets.setcolor(barColorSet);
	}
	// Load prodDef libras
	if(libras_prodef){
		wl = new WebLibras();
	}
	 
    }else{
		//console.log("MOBILE :: não criar a barra");
		return false;
	}	
	
  	// console.log("Go to main content - click!");
    // instance of Acessibile dialog box. (dependence)
    acessibleDialog.addDialog("accessibilityInfo", "acessibility-complementary-info");

    // triggers
    var tr_goMainContent = $("#acc-go-to-main-content");
    var tr_goMainNav = $("#acc-go-to-main-nav");
    var tr_increase_font_size = $("#acc-increase-font-size");
    var tr_normalize_font_size = $("#acc-normalize-font-size");
	var tr_contrast_toogle = $("#acc-contrast-toogle");
	var tr_barcredits = $("#developmentBy");
	var tr_iconEquals = $("#icon-equals");
	

    // vars and tag arrays
	var maxFontResize = 1;
	var nfontResize = 0;
    var arr_taglist = ['h1','h2','h3','h4','h5','h6','p','a','li','th','td'];


    // Go to main content page
    tr_goMainContent.click(function(e){
       // console.log("Go to main content page.");
      e.preventDefault();
       var hash = this.hash;
     //  console.log(hash);
        $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 0, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
       // console.log("main content position.");
      });

	});

    // Go to main navigation in page
    tr_goMainNav.click(function(e){
       // console.log("Go to main navigation menu.");
         e.preventDefault();
       var hash = this.hash;
       console.log(hash);
        $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 0, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      //  console.log("main navegation position.");
      });
    });

    //Increase 2x or 3x font-size
    tr_increase_font_size.click(function(){
        //console.log("Increase font-size.");
        
        var fontSizeMultiplyBy = 0.1;
		var lineheightMultiplyBy = 0.1;
        var fontUnits = ['px','pt','em','rem'];
        var fSizes =[];

		if (nfontResize == maxFontResize){
			return;
		}

        for (var i in arr_taglist) {

            valf = parseFloat($(arr_taglist[i]).css("font-size")) * fontSizeMultiplyBy + fontUnits[3];
            vall = parseFloat($(arr_taglist[i]).css("line-height")) * lineheightMultiplyBy + fontUnits[3];
            $(arr_taglist[i]).css("font-size",valf).css("line-height",vall);
        }
		
		nfontResize ++;
		return;

	});

    //normalize font-size
    tr_normalize_font_size.click(function(){
        //console.log("Nomalize font-size.");
        for (var i in arr_taglist) {
               $(arr_taglist[i]).css("font-size","").css("line-height",""); 
        }
		nfontResize = 0;
		return;
    });

	acessibleAssets.checkHighContrast = function(){
			var hc = $.cookie('accessible_highContrast');
			if (hc == "undefined" || hc == "no" || hc == null ) {
         		acessibleAssets.highContrast(false);
		 } else {
         	 acessibleAssets.highContrast(true);
		 }
		 return;
	}

	acessibleAssets.highContrast = function(arg){

		if(arg == true){
			$.cookie('accessible_highContrast', 'yes', { expires: 7, path: '/' });
			//console.log("aplicar alto contraste");
			$('#acessivel_toolbar').removeClass('toolbar-colorset3').removeClass('toolbar-colorset2');
			tr_iconEquals.removeClass("icon-equal").addClass("icon-equal-hc");
 			$("body").addClass("highContrast");

		}else{
			$.cookie('accessible_highContrast', 'no', { expires: 7, path: '/' });
			//console.log("remover alto contraste");
			$("body").removeClass("highContrast");
			tr_iconEquals.removeClass("icon-equal-hc").addClass("icon-equal");
			acessibleAssets.setcolor(barColorSet);
	}
	return;
	}

    // HighContrast Toogle
    tr_contrast_toogle.click(function(){
      //  console.log("HighConstrast Toogle");

		var hc = $.cookie('accessible_highContrast');
		 if (hc == "undefined" || hc == "no") {
         	acessibleAssets.highContrast(true);
		 } else {
          	acessibleAssets.highContrast(false);
		 }

    });

		// Verificar o alto contraste
		//console.log("verificar alto contraste");
		acessibleAssets.checkHighContrast();

	// click on development info
	 tr_barcredits.click(function(){
		 //alert(this.attr("alt"));
		  alert("Esta barra foi desenvolvida pela Iguale Digital acessibilidade.");
		  return;
	 });


}





/* Acessible Dialog box */
// @author www.visionaustralia.org/digital-access-dialog

acessibleDialog.addDialog = function (linkId, dialogId,fBeforeOpen,fForCloseButton){
	
	$(function(){
        //adds onclick handler to the link. Used when the content is already
		//event handlers are added inside this function, so scope is keept separate for each dialog box, YES.
		if (!linkId) return; //add console.log mersssage. OR throw error.
		if (!dialogId) return;
	
		//add event handler to link
		var triggerLink = $("#" + linkId);
		triggerLink.click(function(event) {
			open(this,event);
			//console.log('click - open');
			
		});
				
		//gib z-index for shadow &  dialog box
		var bigZ = 16123456;
		//body children that we will add or change aria-hidden on
		var bodyChildren = [];
			
		var heading;
		
		var startDialog;
		
		//outside of open function as they are used by close
		var vcontainer;
		var dialog;
		var shadow;
		var parent;
		var isOpen = false;
		var contentCopy;
		var body = $("body");

		function open(link, ev){
		
			if(isOpen){
				ev.preventDefault();
				startDialog.focus();
				return;
			}
			
			isOpen = true;
			
			if(fBeforeOpen && typeof fBeforeOpen == "function") fBeforeOpen();
			
            //Note: .after() returns the link JQuery object - NOT the elements inserted
            
            //create JQuery objects
			vcontainer = $('<div class="vdialog-container"></div>');
            shadow = $('<div class="vashadow"></div>');
            dialog = $('<div class="vadialog"></div>');
            
            var closeButton = $('<button class="vaCloseButton" aria-label="Fechar"> \
								<svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 100 100" aria-hidden="true" focusable="false"> \
								<g style="fill:none;stroke:currentColor;stroke-width:12"><circle cx="50" cy="50" r="44" /> \
								<line x1="15" y1="15" x2="85" y2="85"/><line x1="85" y1="15" x2="15" y2="85"/></g></svg></button>');

			var startCentinel = $('<span class="vaOffscreen" tabindex="0">.</span>');
			startDialog = $('<a class="vaOffscreen" tabindex="-1">Caixa de diálogo iniciada</a>');
			var endDialog = $('<span class="vaOffscreen" tabindex="-1">Caixa de diálogo finalizada</span>');
			var endCentinel = $('<span class="vaOffscreen" tabindex="0"></span>');
			
			startCentinel.focus(function() {
				endDialog.focus();
			});
			
			endCentinel.focus(function() {
				startDialog.focus();
			});


			dialog.append(startCentinel);
			dialog.append(startDialog);
            dialog.append(closeButton)
            
        	var content = $("#" + dialogId);
  			
			parent = content.parent();
            
            var contentToShow = content.clone(true);
            //copy to re-insert after dialog box was closed
            contentCopy = content.clone(true);
            
            content.remove();
            
            dialog.append(contentToShow);
            
            contentToShow.show();
            
            dialog.append(endDialog);
			dialog.append(endCentinel);
			
			//add event handler to close button
			closeButton.click(function(){if(fForCloseButton && typeof fForCloseButton == "function") fForCloseButton(); close();})
            
			var win = $(window);

			function centerDialog(){
			
			
				if(parseInt(dialog.height()) > parseInt(vcontainer.height())){
					//console.log("deuXAbu!");
					shadow.height() = dialog.height();
				}	
				return;
				// var padLeft = parseInt( dialog.css("padding-left"));
				// var padTop =  parseInt(dialog.css("padding-top"));
				// dialog.css("margin-left", - dialog.width() / 2 - padLeft + "px").css("margin-top", - dialog.height() / 2 - padTop + "px");
			}
			win.resize(function(){
				centerDialog();
			});
			
			//Changed to use aria-live much of the above - how we build the dialog - stays the same
			//insert in DOM - it made ALL the difference for JAWS 10 to have these two lines down here!!!!!!!
			dialog.css("z-index",bigZ);
			shadow.css("z-index",bigZ);
			vcontainer.css("z-index",bigZ); 
			
			//hide all top level elements & remember their aria-hidden status
			body.children().each(function () {
				var jQchild = $(this);
				
				var o = {};
				o.jqel = jQchild;

				if(jQchild.attr("aria-hidden") !== undefined){
					o.hadVal = true;
					o.originalVal = jQchild.attr("aria-hidden");
				}else{
					o.hadVal = false;
				}
				bodyChildren.push(o);
				//hide the child
				jQchild.attr("aria-hidden", "true");
			});

			body.append(shadow);
			body.append(vcontainer);
			vcontainer.append(dialog);
			
			//body.append(shadow);
			//body.append(dialog);
			
            shadow.show();

			//centerDialog();

			dialog.show();
			
			startDialog.focus(); 
			
			// close if press scape key
			 $(document).bind('keydown.key27', function(e) {
				if (e.which == 27) { 
				close();
				}   
			});
			
		
			//having a "." in here is hack to ensure NVDA says "Dialog start" when it gets focus. We can remove the . now 
			setTimeout(function(){startCentinel.text("")},2000);
			ev.preventDefault();
			
        }//end open 
		
		
		function close(){
			if(!isOpen)return;
			isOpen = false;

			for(var i=0, c; c=bodyChildren[i]; i++){
				//if element originally had aria-hidden attribute, reinstate value
				if(c.hadVal){
					c.jqel.attr("aria-hidden",c.originalVal);
				//if no original aria-hidden, remove the attribute entirely
				}else{
					c.jqel.removeAttr("aria-hidden");
				}
			}

			dialog.remove();
			shadow.remove();
			vcontainer.remove();
			$(document).unbind("keydown.key27");
			parent.append(contentCopy);

			triggerLink.focus();
		}
		
		acessibleDialog[dialogId] = {};
		acessibleDialog[dialogId].closeDialog = close;
		
	});//end jQUERY on page load



}// end addDialog
	
acessibleDialog.closeDialog = function (dialogId){
	acessibleDialog[dialogId].closeDialog();
}

/*! track-focus v 1.0.0 | Author: Jeremy Fields [jeremy.fields@vget.com], 2015 | License: MIT */
// inspired by: http://irama.org/pkg/keyboard-focus-0.3/jquery.keyboard-focus.js
document.addEventListener("DOMContentLoaded", function(event) { 
	
	(function(body) {

		var usingMouse;

		var preFocus = function(event) {
			usingMouse = (event.type === 'mousedown');
		};

		var addFocus = function(event) {
			if (usingMouse)
				event.target.classList.add('focus--mouse');
		};

		var removeFocus = function(event) {
			event.target.classList.remove('focus--mouse');
		};

		var bindEvents = function() {
			body.addEventListener('keydown', preFocus);
			body.addEventListener('mousedown', preFocus);
			body.addEventListener('focusin', addFocus);
			body.addEventListener('focusout', removeFocus);
		};

		bindEvents();

	})(document.body);

	
		
})