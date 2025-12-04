/**
*  UI utils for the web
*/

(function(nc){	

    "use strict";
    /*
	function getElementsByClassName(className, container) {
		container = container || document;
		container = (typeof container==='string')? document.getElementById(container) : container;
		var children = container.getElementsByTagName('*') || document.all;
		var elements = [], child, classNames;
		
		for (var i = 0, c = children.length; i < c; i++) {
			child = children[i];
			classNames = child.className.split(/\s+/);
			for (var j = 0, l = classNames.length; j < l; j++) {
				if (classNames[j] == className) {
					elements.push(child);
					break;
				}
			}
		}
		return elements;
	}	
	
	function getClasses(elm) {
		return (elm.className || '').split(/\s+/);
	}	
	
	function hasClass(elm, cn) {
		cn = cn.trim();
		var classes = getClasses(elm);
		for( var i=0; i< classes.length; i++ ){
			if( classes[i].trim() == cn ) return true;
		}
		return false;		
	}
	
	
	function addClass(elm, cn) {
		if (!hasClass(elm, cn)) {
			elm.className += (elm.className ? ' ' : '') + cn;
		}
	}
	
	
	function removeClass(elm, cn) {
		var cns = [];
		var classes = getClasses(elm);
		
		for( var i =0; i< classes.length; i++){
			if( classes[i].trim() != cn )
				cns.push( classes[i] );
		}
		elm.className = cns.join(' ');
	}
	
	
	function getFormElements( form ) {
		var elms = [];
		var forms = form.getElementsByTagName('*');
		
		for(var elm in forms){
			var tag = getTag(elm);
			if (tag === 'input' || tag === 'select' || tag === 'textarea') {
				elms.push(elm);
			}
		}
		return elms;	
	}

	function parseDom( innerHtml ){ 
		var objDiv = document.createElement('div');
		objDiv.innerHTML = innerHtml;
		return objDiv; 
	}	
    */
	
	function initializeLanguage(){
	   if( window.navigator.language=="zh-CN" )
	   {
		   nc.defaultOptions.languageID = 0;
	   }else{
		   nc.defaultOptions.languageID = 1;
	   }
	}
 
	
	function $(elm) {
		return (typeof elm === 'string') ? document.getElementById(elm) : elm;
	}
	
	
	function getTag(elm) {
		return elm.tagName.toLowerCase();
	}


	function getValue(elm) {
		var tag = getTag(elm);
		
		if (tag == 'select') {
			return elm.options[elm.selectedIndex].value;

		} else if (tag == 'input') {
			var type = elm.type.toLowerCase();
			if ((type == 'checkbox' || type == 'radio') && !elm.checked) {
				return false;
			}
		}
		return elm.value || elm.placeholder;
	}	
	
	function checkData( oThis ){

		var dataType = oThis.getAttribute("datatype"),
			text = oThis.value || oThis.placeholder,
			matchStatus = false,
			regex = {
				'integer': /^[-+]?[\d]+$/,
				'float': /^[-+]?\d+(\.\d+)?$/
		    };
		
		switch ( dataType ){
			case 'matrix':
			   matchStatus = nc.fn.parseMatrix( text );
			   break;
				
			case 'vector':
			   matchStatus = nc.fn.parseVector( text );
				break;
			
			default:
				matchStatus = text.match( regex[dataType] );
				break;
		}
		
		if( !matchStatus ){			
			addClass(oThis, 'datatype-error');
			return false;			
		}else{
		   removeClass(oThis, 'datatype-error');			   
		   return true;
		}				
	}
	
	
	function getPropStr( propData ){
		var id = propData["id"],
		    type = propData["ctrltype"],
			name = ( propData["name"] )? propData["name"] : id,
		    datatype = (propData["datatype"])? propData["datatype"] : 'float',			
			props = [], extras;			
			
		if( type === 'select' || type === 'textarea'){
			props.push( String.format('id="%1" name ="%2" datatype="%3"', id, name, datatype) );
		}else{
			props.push( String.format('id="%1" name ="%2" type="%3" datatype="%4"', id, name, type, datatype) );
		}
		
		extras = propData.extras;
		
		//set default property
		extras['placeholder'] = ( extras['placeholder'] )? extras['placeholder'] : datatype + ' ' + id;
		
		for(var key in extras ){
			if( extras[key] ){
				props.push( key + '="' + extras[key] + '"' );
			}
		}
		
		return props.join(' ');
	}
	
	
	function getOptionsStr( options, value ){

		 var opt_ary = [],
		     optlen = options.length, option,
		     idx1 = -1, idx2 = -1, idx;
		     
		 for(var i = 0; i < optlen; i++){
		 	if( typeof options[i] === 'object' ){
		 	    if(options[i].selected)
		 	    	idx1 = i;
		 	    
		 		if(value && options[i].value == value)
		 			idx2 = i;
		 	}else{
		 		if(options[i] == value)
		 			idx2 = i;
		 	}
		 }
	
         idx = (idx2 > -1)? idx2 : ((idx1> -1)? idx1 : 0 );		  
		  
		 for( var j = 0; j < optlen; j++){
		    opt_ary.push( '<option' );
			option = options[j];
			
			if( idx === j ) opt_ary.push( ' selected="selected" ' );
			
			if( typeof option === 'object' ){				
				opt_ary.push( ( option.value )? String.format(' value="%1"', option.value) : String.format(' value="%1"', option.text) );							
				opt_ary.push( '>' + option.text + '</option>' );
			}else{
				opt_ary.push( String.format(' value="%1"', option) );
				opt_ary.push( '>' + option + '</option>' );
			}
		 }
		 
		 return opt_ary.join('');			 
	}
	
	
	
	/**
	 *  cmd : the command to execute
	 *  props: input box properties data
	*/
	function createInputBoxWeb( cmd, props, languageID ){
	
	   languageID = languageID || nc.defaultOptions.languageID;
		
	   var  i, c, isOptions, 
	       prop, ctrlType, className,
		   title,
	       param_keys =[], option_keys = [],
	       html = [], param_html = [], options_html = [];		   
		   
	   var inputBox  = '<div>' +
							'<div style="float:left;margin-right: 10px;">%1<div class="%2" style="margin-top:5px;">%3</div></div>' +
							'<div style="float:left;"><br>%4</div>' +
							'<div style="clear:both;"></div>' +
						'</div>';
	
	   for( i = 0, c = props.length; i< c; i++){
	   
			prop = props[i];
			ctrlType = prop.ctrltype.toLowerCase();
			className = prop.extras.class;
			title = (nc.fn.isArray(prop.title) ? prop.title[languageID] : prop.title);


			if( className && className.indexOf('option') > -1 )
			{
			   isOptions = true;
			   prop.extras.value = prop.extras.value || nc.defaultOptions[ prop.id ];
			   option_keys.push( prop.id );
			}else{
			   isOptions = false;
			   param_keys.push( prop.id );
			}

			html = ['<br/>'];
			
			var desc = ((typeof prop.description == 'undefined')? '' : ( nc.fn.isArray(prop.description)? prop.description[languageID] : prop.description ) );
			var titles = '<h5>' + title + ':</h5>';
			
			
			if( ctrlType === 'text' || ctrlType === 'number'){
				
				html.push( String.format(inputBox, titles, className,
						'<input ' + getPropStr( prop ) + '/>',
						desc) );				
				
			}else if( ctrlType === 'textarea' ){
				prop.extras.rows = ( prop.extras.rows )? prop.extras.rows : 5;
				prop.extras.cols = ( prop.extras.cols )? prop.extras.cols : 30;	
		
				html.push( String.format(inputBox, titles, className,
										'<textarea ' + getPropStr( prop ) + '></textarea>',
										desc) );
				
			}else if( ctrlType === 'checkbox' || ctrlType === 'radio' ){
			
				html.push('<div class="input-group"><input ' + getPropStr( prop ) + '/><label for="' + prop.id + '" data-on="On" data-off="Off"><span></span></label></div>');
				
			}else if( ctrlType === 'select' ){
				
				html.push( String.format(inputBox, titles, className,
										'<select ' + getPropStr( prop ) + '>' + getOptionsStr( prop.options, nc.defaultOptions.numOfDecimal ) + '</select>',
										desc) );
			   
			}else if(ctrlType === 'number-spin'){
				var prop_clone = nc.fn.clone( prop );
				prop_clone.ctrlType = 'number'; 
				
				html.push('<h5 class="mui-content-padded">' + title + ':</h5>');
			   html.push('<div class="mui-numbox" data-numbox-min="1" data-numbox-step="1" data-numbox-max="10">');				
			   html.push('<button class="mui-btn mui-numbox-btn-minus" type="button">-</button>');
				html.push('<input ' + getPropStr( prop_clone ) + '/>');
				html.push('<button class="mui-btn mui-numbox-btn-plus" type="button">+</button>');
			   html.push('</div><br><br>');
				
			}else if(ctrlType === 'range'){
				html.push('<h5 class="mui-content-padded">' + title + ':</h5>');
			   html.push('<div class="mui-input-row mui-input-range field-contain" data-numbox-min="1" data-numbox-step="1" data-numbox-max="10">');				
					html.push('<button class="mui-btn mui-numbox-btn-minus" type="button">-</button>');
					html.push('<input ' + getPropStr( prop ) + '/>');
					html.push('<button class="mui-btn mui-numbox-btn-plus" type="button">+</button>');
			   html.push('</div>');
			}
						

			if( isOptions ){
				options_html.push( html.join('') );
			}else{
				param_html.push( html.join('') );
			}
			
		}//end for

		param_html.push('<input id="input-param" type="hidden" value="' + param_keys.join(',') + '">');
		param_html.push('<input id="input-options" type="hidden" value="' + option_keys.join(',') + '">');
		param_html.push('<input id="input-cmd" type="hidden" value="' + cmd + '">');

		var problemParam = nc.defaultOptions.isMobile ? param_html.join('') : '<table border="0" cellspacing="0" cellpadding="0" >' + param_html.join('') + '</table>';
		var settingParam = nc.defaultOptions.isMobile ? options_html.join('') : '<table border="0" cellspacing="0" cellpadding="0" >' + options_html.join('') + '</table>';
		
		return {
			problemParam: problemParam,
			settingParam: settingParam
		};
	}

    /*
	function createInputBoxMUI(cmd, props){	 

	   //var container = $( containerId );
	   var isOptions, prop, ctrltype, className,
	       param_keys =[], option_keys = [],
	       html = [], param_html = [], options_html = [];

	   //container.innerHTML = '';
	
	   for(var i = 0, c = props.length; i< c; i++){
	   
		  prop = props[i];
		  ctrltype = prop.ctrltype;
		  className = prop.extras.class;
		  
		  if( className && className.indexOf('option') > -1 )
		  {
		  	   isOptions = true;
		  	   prop.extras.value = prop.extras.value || nc.defaultOptions[prop.id];
		  	   option_keys.push(prop.id);
		  }else{
		  	   isOptions = false;
		  	   param_keys.push(prop.id);
		  }
		  
		   html = [];
		   if( ctrltype === 'text' || ctrltype === 'number'){
		   	  html.push('<h5>' + prop.title + ':</h5>');
		        html.push('<div class="mui-input-row mui-input-clear">');
		        html.push('<input ' + getPropStr( prop ) + '/>');
		        html.push('</div>');
		        
			}else if( ctrltype === 'textarea' ){
				prop.extras.rows = ( prop.extras.rows )? prop.extras.rows : 3;				
				
		   		html.push('<h5>' + prop.title + ':</h5>');
		        html.push('<div class="mui-input-row mui-input-clear">');				
				html.push('<textarea ' + getPropStr( prop ) + '></textarea>');
		        html.push('</div>');
			
			}else if( ctrltype === 'checkbox' || ctrltype === 'radio' ){				
				html.push('<div class="input-group"><input ' + getPropStr( prop ) + '/><label for="' + prop.id + '" data-on="On" data-off="Off"><span></span></label></div>');
				
			}else if( ctrltype === 'select' ){				

				html.push('<h5>' + prop.title + ':</h5>');
		        html.push('<div class="mui-input-row mui-input-clear">');
				html.push('<select ' + getPropStr( prop ) + '>' + getOptionsStr( prop.options, nc.defaultOptions.numOfDecimal ) + '</select>');
			    html.push('</div>');
				
			}else if(ctrltype === 'number-spin'){
				var prop_clone = nc.fn.clone( prop );
				prop_clone.ctrltype = 'number'; 
				html.push('<h5 class="mui-content-padded">' + prop.title + ':</h5>');
		        html.push('<div class="mui-numbox" data-numbox-min="1" data-numbox-step="1" data-numbox-max="10">');				
					html.push('<button class="mui-btn mui-numbox-btn-minus" type="button">-</button>');
					html.push('<input ' + getPropStr( prop_clone ) + '/>');
					html.push('<button class="mui-btn mui-numbox-btn-plus" type="button">+</button>');
			    html.push('</div><br><br>');		    

			    
			}else if(ctrltype === 'range'){
				html.push('<h5 class="mui-content-padded">' + prop.title + ':</h5>');
		        html.push('<div class="mui-input-row mui-input-range field-contain" data-numbox-min="1" data-numbox-step="1" data-numbox-max="10">');				
					html.push('<button class="mui-btn mui-numbox-btn-minus" type="button">-</button>');
					html.push('<input ' + getPropStr( prop ) + '/>');
					html.push('<button class="mui-btn mui-numbox-btn-plus" type="button">+</button>');
			    html.push('</div>');			
			}
			
			
			if( isOptions ){
				options_html.push( html.join('') );
			}else{
				param_html.push( html.join('') );
			}			
			
		}//end for

		param_html.push('<input id="input-param" type="hidden" value="' + param_keys.join(',') + '">');
		param_html.push('<input id="input-options" type="hidden" value="' + option_keys.join(',') + '">');
		param_html.push('<input id="input-cmd" type="hidden" value="' + cmd + '">');
		
		//container.innerHTML = param_html.join('') + options_html.join('');

		return {
			problemParam: param_html.join(''),
			settingParam: options_html.join('')
		};


		//mui('.mui-numbox').numbox();
	}
	*/
	
	
	function mergeInputData( inputKey ){
		
		var ary = inputData[ inputKey ],
			inputAry = [],
			inItem;
		
		if( !ary ) return [];
		
		if( ! nc.fn.isArray( ary ) ) return [ary];

		for( var i = 0, c = ary.length; i < c; i++){
		   inItem = ary[i];
		   
		   if( typeof inItem === 'string' ){
			   inputAry = inputAry.concat( mergeInputData( inItem ) );
		   }else{
			   var baseKey = inItem["base"];
			   if( !baseKey ){
				   inputAry.push( inItem );
			   }else{
				   var newItem = nc.fn.clone( inputData[ baseKey ] );
				   
				   for( var k in inItem ){
					   if( k !== 'base' && k !== 'extras'){
						   newItem[k] = inItem[k];
					   }
				   }
				   
				   if( inItem.extras ){
					   for( var e in inItem.extras){
						   newItem.extras[e] = inItem.extras[e];
					   }
				   }
				   
				   inputAry.push( newItem );
			   }
		   }
		}
	
		return inputAry;
	}	
	
	
	function setParamInputBoxWeb( cmd ){
		var data = mergeInputData( cmd ),	
			param = createInputBoxWeb( cmd, data );
		 
		 $('param-content').innerHTML = param.problemParam;
		 $('setting-content').innerHTML = param.settingParam;
		 
		 $('param-panel').style.display = 'block';
		 $('result-panel').style.display = 'none';
		 $('default-panel').style.display = 'none';
	}
	
	
	function setParamInputBox7( cmd ){
	     var data = mergeInputData( cmd );	
		 var param = createInputBox7(cmd, data);
		 document.getElementById('param-content').innerHTML = param.problemParam;
		 document.getElementById('setting-content').innerHTML = param.settingParam;

		 //document.getElementById('param-panel').style.display = 'block';
		 //document.getElementById('result-panel').style.display = 'none';
		 //document.getElementById('default-panel').style.display = 'none';
	}	
	
	
	function getInputData( ){
	   var data = {},
	   	   options = {},
	   	   i, c, id, text, datatype, elm,
	   	   param_keys, option_keys;
	   
	   param_keys = $('input-param').value.split(',');	   
	   for( i = 0, c = param_keys.length; i < c; i++ )
	   {
		   elm = $( param_keys[i] );
		   if( elm ){
				datatype = elm.getAttribute('datatype');
				id = elm.id;
				text = getValue( elm );
				
				if( datatype === 'integer'){
					data[id] = parseInt( text );
					
				}else if( datatype === 'float'){
				   data[id] = parseFloat( text );
				   
				}else if(datatype === 'matrix'){
					data[id] = nc.fn.parseMatrix( text );
					
				}else if(datatype === 'vector'){
					data[id] = nc.fn.parseVector( text );					
					
				}else if( datatype === 'charvector' ){
					data[id] = nc.fn.parseVector( text, false );
				}else{
					data[id] = text;
				}		   
		   }	   
	   }
	   
	   
	   option_keys = $('input-options').value.split(',');	   
	   for( i = 0, c = option_keys.length; i < c; i++ )
	   {
		   elm = $( option_keys[i] );		   
		   if( elm ){
				datatype = elm.getAttribute('datatype');
				id = elm.id;
				text = getValue( elm );
				
				if( datatype === 'integer'){
					options[id] = parseInt( text );
					
				}else if( datatype === 'float'){
				   options[id] = parseFloat( text );
				   
				}else if(datatype === 'matrix'){
					options[id] = nc.fn.parseMatrix( text );
					
				}else if(datatype === 'vector'){
					options[id] = nc.fn.parseVector( text );
					
				}else{
					options[id] = text;
				}			

		   }	   
	   }
	   
	   data.options = options;
	   
	   return data;
	}
	

	function createMenuWeb( options ){
		
		options = nc.fn.extend({}, nc.defaultOptions, options );

		var i, j, m, n = menuData.length,
			sectionTitle, cmds,
			strUl = [], strLi;
		
		for( i = 0; i< n; i++){
		
		   sectionTitle = menuData[i].title[ options.languageID ];		
		
		   cmds = menuData[i].cmd;
		   m = cmds.length;
		   
		   strLi = ['<li>'];
		   strLi.push('<h3 style="border:solid 1px #ccc;display:block;word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">&loz;' + sectionTitle + '</h3>');
		   strLi.push('<div class="acc-section" style="opacity: 0.004975124378109453; height: 0px; ">');
		   strLi.push('<div class="acc-content">');
		   strLi.push('<ul>');
			
		   for( j = 0; j < m; j++){
				strLi.push( String.format('<li><a id = "%1" title = "%2" titles ="%4" onclick="onMenuItemClicked(this)" style="display:block;width:31em;word-break:keep-all;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">&bull;%3</a></li>',cmds[j].id, cmds[j].title[ options.languageID ], cmds[j].text[ options.languageID ], cmds[j].text.join('|')) );					
		   }		  
		   
		   strLi.push('</ul></div></div></li>');		   
		   strUl.push( strLi.join('') );
		}		
		return strUl.join('');
	}
	
	
	function createMenu7( options ){
		options = nc.fn.extend({}, nc.defaultOptions, options );		

		// %1: titleImage
		// %2: title
		// %3：description
		var MENU_TITLE_TMPL = '<a href="#" class="item-link item-content">'
		   + ' <div class="item-media"><img src="%1" width="44"></div>'
		   + '   <div class="item-inner">'
		   + '     <div class="item-title-row">'
		   + '        <div class="item-title">%2</div>'
		   + '     </div>'
		   + '     <div class="item-text">%3</div>'
		   + '</div></a>';
		   
		
  		// %1: queryParam
        // %2: menuItemTitle
		var MEMU_ITEM_TMPL = '<li class="list-item">'
  		      + '<a href="html/paramSetting.html%1" class="item-content item-link">'
			  +	  '<div class="item-media"><i class="icon icon-bars"></i></div>'
			  +	  '<div class="item-inner">'
			  +		'<div class="item-title">%2</div>'
			  +	  '</div>'
			  + '</a>'
		  + '</li>';
		

		var i, j, m, n = menuData.length,
			sectionTitle, titleImage, description,
			cmds, menuList = ['<ul>'];
		
		for( i = 0; i< n; i++){
		
		   sectionTitle = menuData[i].title[ options.languageID ];
		   titleImage = menuData[i].titleImage;
		   description = menuData[i].description[ options.languageID ];
		   description = '';
		   
		   cmds = menuData[i].cmd;
		   m = cmds.length;		   
		   
		   menuList.push('<li class="accordion-item">');
		   menuList.push( String.format(MENU_TITLE_TMPL, titleImage, sectionTitle, description) );
		   menuList.push( '<div class="accordion-item-content"><ul>' );
		   
		   for( j = 0; j < m; j++){
			    var queryStr = '?cmd=' + cmds[j].id + '&text=' + cmds[j].text[ options.languageID ];
				menuList.push( String.format(MEMU_ITEM_TMPL, queryStr, cmds[j].title[ options.languageID ] ) );					
		   }
		   
		   menuList.push('</ul></div></li>');
		   
		}
		menuList.push('</ul>');

		return menuList.join('');
	}
	
	
	function createInputBox7(cmd, props){	 

	   //var container = $( containerId );
	   var isOptions, prop, ctrltype, className,
	       param_keys =[], option_keys = [], html, 
		   param_html = ['<div class="content-block-inner">'],
		   options_html = ['<div class="content-block-inner">'],
		   languageID = nc.defaultOptions.languageID;

		// %1：title
		// %2: ctrlHTML
		// %3: description
		var INPUT_BOX_TMPL = '<div>' +
			    '<div style="font-size:16px;">%1</div>' + 
				'<div class="item-input">%2</div>' +
				'<div style="color:#696969;">%3</div>' +
			'</div>';
			
	
	   for(var i = 0, c = props.length; i< c; i++){
	   
		  prop = props[i];
		  ctrltype = prop.ctrltype;
		  className = prop.extras.class;
		  
		  if( className && className.indexOf('option') > -1 )
		  {
		  	   isOptions = true;
		  	   prop.extras.value = prop.extras.value || nc.defaultOptions[prop.id];
		  	   option_keys.push(prop.id);
		  }else{
		  	   isOptions = false;
		  	   param_keys.push(prop.id);
		  }
		  
		   html = [];
		   
		   if( ctrltype === 'text' || ctrltype === 'number'){
			   var tmpl = String.format(INPUT_BOX_TMPL,
 			                             prop.title[languageID], 
										 '<input ' + getPropStr( prop ) + '/>', 
										 prop.description[languageID] );
			   html.push( tmpl );
		        
			}else if( ctrltype === 'textarea' ){
				prop.extras.rows = ( prop.extras.rows )? prop.extras.rows : 3;	

			   var tmpl = String.format(INPUT_BOX_TMPL,
 			                             prop.title[languageID], 
										 '<textarea ' + getPropStr( prop ) + '></textarea>', 
										 prop.description[languageID] );
			   html.push( tmpl );
			
			}else if( ctrltype === 'checkbox' || ctrltype === 'radio' ){				
				html.push('<div class="input-group"><input ' + getPropStr( prop ) + '/><label for="' + prop.id + '" data-on="On" data-off="Off"><span></span></label></div>');
				
			}else if( ctrltype === 'select' ){				

			   var tmpl = String.format(INPUT_BOX_TMPL,
 			                             prop.title[languageID], 
										 '<select ' + getPropStr( prop ) + '>' + getOptionsStr( prop.options, nc.defaultOptions.numOfDecimal ) + '</select>', 
										 prop.description[languageID] );
			   html.push( tmpl );
				
			}
			
			if( isOptions ){
				options_html.push( '<br>' + html.join('') );
			}else{
				param_html.push( '<br>' + html.join('') );
			}			
			
		}//end for
		
		param_html.push('</div>');
		options_html.push('</div>');

		param_html.push('<input id="input-param" type="hidden" value="' + param_keys.join(',') + '">');
		param_html.push('<input id="input-options" type="hidden" value="' + option_keys.join(',') + '">');
		param_html.push('<input id="input-cmd" type="hidden" value="' + cmd + '">');

		return {
			problemParam: param_html.join(''),
			settingParam: options_html.join('')
		};
	}	
	
	
	
	function solveProblem( cmd ){
		var parm = getInputData();
		var fn = new Function('data', 'return ' + cmd + '(data);');
		var resultData = fn(parm);		
		return resultData;
	}	
	
   nc.fn.extend(nc.ui, {
		createMenu: nc.defaultOptions.isMobile? createMenu7: createMenuWeb,
		setParamInputBox: nc.defaultOptions.isMobile? setParamInputBox7: setParamInputBoxWeb,	
		createInputBox: nc.defaultOptions.isMobile? createInputBox7: createInputBoxWeb,
		checkData: checkData,
		solveProblem: solveProblem,
		initializeLanguage: initializeLanguage
	});
})( nc );








/*
* 滑动菜单 slider模块
* 作为nc的插件使用
*/
(function(nc){
	function slider(n) {
		this.n = n;
		this.a = [];
	}
	
	slider.prototype.init = function(t, e, m, o, k) {
		var a = document.getElementById(t),
		i = s = 0,
		n = a.childNodes,
		l = n.length;
		this.s = k || 0;
		this.m = m || 0;
		for (i = 0; i < l; i++) {
			var v = n[i];
			if (v.nodeType != 3) {
				this.a[s] = {};
				this.a[s].h = h = v.getElementsByTagName(e)[0];
				this.a[s].c = c = v.getElementsByTagName('div', v)[0];
				h.onclick = new Function(this.n + '.pr(0,' + s + ')');
				if (o == s) {
					h.className = this.s;
					c.style.height = 'auto';
					c.d = 1;
				} else {
					c.style.height = 0;
					c.d = -1;
				}
				s++;
			}
		}
		this.l = s;
	};
		
	slider.prototype.pr = function(f, d) {
		for (var i = 0; i < this.l; i++) {
			var h = this.a[i].h,
			c = this.a[i].c,
			k = c.style.height;
			k = k == 'auto' ? 1: parseInt(k);
			clearInterval(c.t);
			if ((k != 1 && c.d == -1) && (f == 1 || i == d)) {
				c.style.height = '';
				c.m = c.offsetHeight;
				c.style.height = k + 'px';
				c.d = 1;
				h.className = this.s;
				su(c, 1);
			} else if (k > 0 && (f == -1 || this.m || i == d)) {
				c.d = -1;
				h.className = '';
				su(c, -1);
			}
		}
	};
	
	function su(c) {
		c.t = setInterval(function() {
			sl(c);
		},
		20);
	}
	
	function sl(c) {
		var h = c.offsetHeight,
		d = (c.d == 1) ? c.m - h: h;
		c.style.height = h + (Math.ceil(d / 5) * c.d) + 'px';
		c.style.opacity = h / c.m;
		c.style.filter = 'alpha(opacity=' + h * 100 / c.m + ')';
		if ((c.d == 1 && h >= c.m) || (c.d != 1 && h == 1)) {
			if (c.d == 1) {
				c.style.height = 'auto';
			}
			clearInterval(c.t);
		}
	}	

	nc.ui.accordion = {
		slider: slider
	};
})( nc );
//End of slider men