uiCore.directive('progressBar', function() {
    return {
        restrict: 'AE',
        transclude: true,
        replace: true,
        template: '<div class="ui_com_progressbar_info"><div class="ui_com_progressbar_top">' + '<richtext  param="compData.JS.textsmallfont1" ></span>' + '</div><div class="ui-percentageIcon" showpercentageimage={{percentageimageblockconfig}} styleset={{styleSet}} percentage percent="percent"></div><div class="ui_com_progressbar_icon_div"><div ng-show="compData.JS.percentagetextblockconfig" class="ui_com_tine_icon"></div><div ng-show="compData.JS.percentagetextblockconfig" class="ui_com_progressbar_icon">{{percent}}%</div></div>' + '<div class="ui_com_progressbar_bottom">' + '<horizontal-container param="compData.JS.TraffuUsagedetails" >' + '<horizontal-container param="compData.JS.TrafficUsagevtfxUsedDetails" ><horizontal-container param="compData.JS.TraffuUsageValue" >' + '<richtext  param="compData.JS.textsmallfontUsed"></richtext>' + '<richtext  param="compData.JS.textsmallfontused"  ></richtext>' + '<richtext  param="compData.JS.textsmallfontunit" ></richtext>' + '</horizontal-container></horizontal-container>' + '<horizontal-container  param="compData.JS.TrafficUsagevtfxAvailDetails"><horizontal-container param="compData.JS.TraffuUsageValue" >' + '<richtext param="compData.JS.textsmallfontAvailable"  ></richtext>' + '<richtext param="compData.JS.textsmallfontremain" ></richtext>' + '<richtext  param="compData.JS.textsmallfontunit" ></richtext>' + '</horizontal-container></horizontal-container>' + '<horizontal-container  param="compData.JS.TrafficUsagevtfxTotalDetails" ><horizontal-container param="compData.JS.TraffuUsageValue" >' + '<richtext    param="compData.JS.textsmallfontTotal"></richtext>' + '<richtext param="compData.JS.textsmallfonttotal" ></richtext>' + '<richtext param="compData.JS.textsmallfontunit"  ></richtext>' + '</horizontal-container></horizontal-container>' + '</horizontal-container>' + '</div></div>',
        require: '^pid',
        controller: [
            '$scope',
            '$element',
            '$attrs',
            'coreService',
            'coreUtils',
            '$timeout',
            function($scope, $element, $attrs, coreService, coreUtils, $timeout) {
                $scope.cid = $attrs.cid;
                $scope.eventMap = {};
                $scope.compData = {
                		JS:{
                		'TrafficUsagevtfxUsedDetails' : {
                			CSS : {},
                			JS : {
                				type : "TrafficUsagevtfxUsedDetails",
                				TrafficUsagevtfxUsedDetails : {
                					extendable : "false",
                					position : "relative",
                					width : "32%",
                					height : "100%",
                					display : "flex",
                					border : "none",
                					"box-shadow" : "none",
									"float" : "left",
									"overflow" : "hidden"
                				}
                			}
                		},
                		'TrafficUsagevtfxAvailDetails' : {
	                			CSS : {},
	                			JS : {
	                				type : "TrafficUsagevtfxAvailDetails",
	                				TrafficUsagevtfxAvailDetails : {
	                					extendable : "false",
	                					position : "relative",
	                					width : "36%",
	                					height : "100%",
	                					display : "flex",
	                					border : "none",
	                					"box-shadow" : "none",
										"float" : "left",
										"overflow" : "hidden"
	                				}
	                			}
	                		},
	                		'TrafficUsagevtfxTotalDetails' : {
	                			CSS : {},
	                			JS : {
	                				type : "TrafficUsagevtfxTotalDetails",
	                				TrafficUsagevtfxTotalDetails : {
	                					extendable : "false",
	                					position : "relative",
	                					width : "32%",
	                					height : "100%",
	                					display : "flex",
	                					border : "none",
	                					"box-shadow" : "none",
										"float" : "left",
										"overflow" : "hidden"
	                				}
	                			}
	                		},
	                		'TraffuUsagedetails' : {
	                			CSS : {},
	                			JS : {
	                				type : "TraffuUsagedetails",
	                				TraffuUsagedetails : {
	                					extendable : "false",
	                					position : "relative",
	                					width : "100%",
	                					height : "2em",
	                					display : "flex",
	                					border : "none",
	                					border : "none",
	                					"box-shadow" : "none",
	                					top : "0px"
	                				}
	                			}
	                		},
	                		'TraffuUsageValue' : {
	                			CSS : {},
	                			JS : {
	                				type : "TraffuUsageValue",
	                				TraffuUsageValue : {
	                					extendable : "false",
	                					position : "relative",
	                					border : "none",
	                					"box-shadow" : "none",
	                					width : "4em"
	                				}
	                			}
	                		},
	                		'textsmallfont1' : {
	                			CSS : {
	                				"font-size" : "0.7em",
	                				"line-height" : "2.5em",
	                				"text-overflow" : "ellipsis",
	                				"white-space" : "nowrap",
	                				overflow : "hidden",
	                				"min-width" : "10%",
	                				"max-width" : "100%",
	                				"text-align" : "left",
	                				"font-family" : "inherit"
	                			},
	                			JS : {
	                				text:$scope.data.name
	                			}
	                		},
	                		'textsmallfontUsed' : {
	                			CSS : {
	                				"font-size" : "0.7em",
	                				"line-height" : "2.5em",
	                				"font-family" : "inherit",
	                				display : "inline"
	                			},
	                			JS : {
	                				text : "Used:"
	                			}
	               		},
	               		'textsmallfont' : {
	               			CSS : {
	               				"font-size" : "0.7em",
	               				"line-height" : "2.5em",
	               				"text-overflow" : "ellipsis",
	               				"white-space" : "nowrap",
	               				overflow : "hidden",
	               				"min-width" : "10%",
	               				"max-width" : "100%",
	               				"text-align" : "left",
	               				"font-family" : "inherit",
	               				display : "inline"
	               			},
	               			JS : {
	               				
	               			}
	               		},
	               		'textsmallfontused' : {
	               			CSS : {
	               				"font-size" : "0.7em",
	               				"line-height" : "2.5em",
	               				"text-overflow" : "ellipsis",
	               				"white-space" : "nowrap",
	               				overflow : "hidden",
	               				"min-width" : "10%",
	               				"max-width" : "100%",
	               				"text-align" : "left",
	               				"font-family" : "inherit",
	               				display : "inline"
	               			},
	               			JS : {
	               				text:$scope.data.used
	               			}
	               		},
	               		'textsmallfontremain' : {
	               			CSS : {
	               				"font-size" : "0.7em",
	               				"line-height" : "2.5em",
	               				"text-overflow" : "ellipsis",
	               				"white-space" : "nowrap",
	               				overflow : "hidden",
	               				"min-width" : "10%",
	               				"max-width" : "100%",
	               				"text-align" : "left",
	               				"font-family" : "inherit",
	               				display : "inline"
	               			},
	               			JS : {
	               				text:$scope.data.remain
	               			}
	               		},
	               		'textsmallfontname' : {
	               			CSS : {
	               				"font-size" : "0.7em",
	               				"line-height" : "2.5em",
	               				"text-overflow" : "ellipsis",
	               				"white-space" : "nowrap",
	               				overflow : "hidden",
	               				"min-width" : "10%",
	               				"max-width" : "100%",
	               				"text-align" : "left",
	               				"font-family" : "inherit",
	               				display : "inline"
	               			},
	               			JS : {
	               				text:$scope.data.name
	               			}
	               		},
	               		'textsmallfontunit' : {
	               			CSS : {
	               				"font-size" : "0.7em",
	               				"line-height" : "2.5em",
	               				"text-overflow" : "ellipsis",
	               				"white-space" : "nowrap",
	               				overflow : "hidden",
	               				"min-width" : "10%",
	               				"max-width" : "100%",
	               				"text-align" : "left",
	               				"font-family" : "inherit",
	               				display : "inline"
	               			},
	               			JS : {
	               				text:$scope.data.unit
	               			}
	               		},
	               		'textsmallfonttotal' : {
	               			CSS : {
	               				"font-size" : "0.7em",
	               				"line-height" : "2.5em",
	               				"text-overflow" : "ellipsis",
	               				"white-space" : "nowrap",
	               				overflow : "hidden",
	               				"min-width" : "10%",
	               				"max-width" : "100%",
	               				"text-align" : "left",
	               				"font-family" : "inherit",
	               				display : "inline"
	               			},
	               			JS : {
	               				text:$scope.data.total
	               			}
	               		},
	               		'textsmallfontAvailable' : {
	               			CSS : {
	               				"font-size" : "0.7em",
	               				"line-height" : "2.5em",
	               				"font-family" : "inherit",
	               				display : "inline"
	               			},
	               			JS : {
	               				text : "Available:"
	               			}
	               		},
	               		'textsmallfontTotal' : {
	               			CSS : {
	               				"font-size" : "0.7em",
	               				"line-height" : "2.5em",
	               				"font-family" : "inherit",
	               				display : "inline"
	               			},
	               			JS : {
	               				text : "Total:"
	               			}
	               		}
            		}
                };
                $scope.extendDeep = function extendDeep(dst) {
                    angular.forEach(arguments, function(obj) {
                        if (obj !== dst) {
                            angular.forEach(obj, function(value, key) {
                                if (dst[key] && dst[key].constructor && dst[key].constructor === Object) {
                                    extendDeep(dst[key], value);
                                } else {
                                    dst[key] = value;
                                }
                            });
                        }
                    });
                    return dst;
                };
                $scope.extendComponentData = function(componetData) {
                    $scope.compData = coreUtils.extendDeep($scope.compData, componetData);
                    /*$timeout(function() {
                        $scope.$apply();
                    });*/
                };
                $scope.init = function() {
                    coreService.registerComponentInstance($element.attr('cid'), $scope);
                    var properties = coreService.getInitProperties($attrs['cid']) || {},
                        jsProp = properties.JS || {},
                        cssProp = properties.CSS || {},
                        jsData = coreUtils.String2JSON($attrs['jsdata']),
                        cssData = coreUtils.String2JSON($attrs['cssdata']);
                    // console.log(JSON.stringify(coreService.getInitProperties($attrs['cid'])));

                    $scope.jsProp = coreUtils.extendDeep(jsProp, jsData);
                    $scope.cssProp = coreUtils.extendDeep(cssProp, cssData);
                    $scope.title = $scope.jsProp.title;
                    $scope.item1 = $scope.jsProp.item1;
                    $scope.item2 = $scope.jsProp.item2;
                    $scope.item3 = $scope.jsProp.item3;
                    $scope.percentageimageblockconfig = $scope.jsProp.percentageimageblockconfig;
                    $scope.convertRangeConfig();
                    $scope.extendComponentData(coreService.getInitProperties($scope.cid));

                };
                $scope.applyElementCss = function() {
                    $element.css($scope.cssProp);
                    $scope.applyIconStyles();
                };
                $scope.getPercentageColor = function() {
                    var valueSet = undefined;
                    for (p in $scope.styleSet) {

                        var dataSet = p.split("_");

                        if (dataSet.length > 0) {

                            if (parseInt(dataSet[0]) <= $scope.percent && $scope.percent <= parseInt(dataSet[1])) {
                                return $scope.styleSet[p];
                            }
                        }
                    }
                    return $scope.styleSet.defaultset;
                };
                $scope.applyIconStyles = function() {
                    var progress = $element[0].querySelector('.ui_com_progressbar_icon');
                    var tine = $element[0].querySelector('.ui_com_tine_icon');
                    var color = $scope.getPercentageColor();
                    angular.element(progress).css({
                        'background-color': $scope.getPercentageColor().activecolor,
                        "position" : "relative",
                        "top" : "-0.9em",
                        "border-radius" : "0.2em",
                        "font-size" : "0.8em"
                    });
                    //add begin tWX330131 demand of mtnc
                    angular.element(tine).css({
                        "width": "0",
                        "position": "relative",
                        "left" : "-0.2em",
                        "border-bottom" : "0.3em solid",
                        "border-right" : "0.3em solid",
                        "border-right-color" : $scope.getPercentageColor().activecolor,
                        "border-top" : "0.3em solid"
                    });
                    //add end tWX330131
                };
                $scope.convertRangeConfig = function() {
                    $scope.styleSet = {};
                    for (var i = 1; i <= 4; i++) {
                        $scope.convertSingleRangeConfig('range' + i);
                    }
                    $scope.styleSet['defaultset'] = {
                        'activecolor': $scope.jsProp.defaultRange.c,
                        'activeimage': $scope.jsProp.defaultRange.iu
                    };
                };
                $scope.convertSingleRangeConfig = function(singleRange) {
                    var singleRangeConfig = $scope.jsProp[singleRange];
                    if (null != singleRangeConfig.e && singleRangeConfig.e == 1) {
                        $scope.styleSet[singleRangeConfig.l + '_' + singleRangeConfig.h] = {
                            'activecolor': singleRangeConfig.c,
                            'activeimage': singleRangeConfig.iu
                        };
                    }
                };
            }
        ],
        link: function($scope, element, attributes, $controller, transcludeFn) {
            $scope.percent = attributes['percent'];
            $scope.pageID = $controller.pageID;
            $scope.componentType = 'progress-bar';
            $scope.init();
            $scope.applyElementCss();
        }
    };
});
uiCore.directive("notificationbar",["coreService","coreUtils","$timeout",function(c,a,b){return{restrict:"EA",replace:true,require:"^pid",scope:{param:"=param"},template:'<div {{param}}  style="display:none" class="notificationbar">	<idivholder param="compData.JS.outerholder">		<idivholder param="compData.JS.leftimageholder">			<imageholder param="compData.JS.notificationimage"></imageholder>		</idivholder>		<idivholder param="compData.JS.contentholder" ifit="{{compData.JS.fitdivminus}}" vscroll="null">			<idivholder param="compData.JS.contenttextholder">				<ihtmltext param="compData.JS.notificationtext" itext="{{compData.JS.notificationtext.JS.textdata}}"></ihtmltext>			</idivholder>		</idivholder>		<idivholder param="compData.JS.closeholder" ng-click="closeClick();$event.stopPropagation();">			<imageholder param="compData.JS.closeimage"></imageholder>		</idivholder>		<idivholder param="compData.JS.detailholder" class="fluxdisplay">			<ibutton param="compData.JS.detailbutton" ng-click="detailClick();$event.stopPropagation();" class="fluxdisplay"></ibutton>		</idivholder>	</idivholder></div>',controller:["$scope","$element","$attrs","coreService","coreUtils",function(g,f,e,h,d){g.cid=e.cid;g.eventMap={};g.compData={CSS:{height:"2.5em",right:"0",position:"fixed","z-index":"2147483646",background:'url("'+top.tlbs.templatePath+'/images/content_bg_1.png") repeat scroll 0 0',"background-size":"contain","box-shadow":"2px 2px 5px #777","-moz-box-shadow":"2px 2px 5px #777","-webkit-box-shadow":"2px 2px 5px #777","font-style":"normal","font-family":"Microsoft Yahei","font-weight":"normal","text-shadow":"none",overflow:"hidden",display:"block",},JS:{clickable:false,fitdivminus:"abcd",autoclosetimeout:200,animation:false,messagemapping:"",detaileventdata:"",packagedata:"packagelist",stateconfig:{state:1,state0:{},state1:{},state2:{},state3:{}},outerholder:{CSS:{height:"100%",width:"100%",overflow:"hidden",position:"absolute"},JS:{clickable:false,animation:false,clickevent:"",stateconfig:{state:0,state0:{},state1:{},state2:{},state3:{}}}},leftimageholder:{CSS:{height:"100%","float":"left",cssFloat:"left",overflow:"hidden"},JS:{clickable:false,animation:false,clickevent:"",stateconfig:{state:0,state0:{},state1:{},state2:{},state3:{}}}},contentholder:{CSS:{height:"100%","float":"left",cssFloat:"left",overflow:"hidden"},JS:{clickable:false,animation:false,clickevent:"",stateconfig:{state:0,state0:{},state1:{},state2:{},state3:{}}}},contenttextholder:{CSS:{height:"100%",width:"100%",display:"table"},JS:{clickable:false,animation:false,clickevent:"",stateconfig:{state:0,state0:{},state1:{},state2:{},state3:{}}}},closeholder:{CSS:{height:"100%",width:"3em","float":"right",cssFloat:"right",overflow:"hidden"},JS:{clickable:false,animation:false,clickevent:"",stateconfig:{state:0,state0:{},state1:{},state2:{},state3:{}}}},detailholder:{CSS:{height:"100%","float":"right",cssFloat:"right",overflow:"hidden","align-items":"center","-webkit-box-align":"center","justify-content":"center"},JS:{clickable:false,animation:false,clickevent:"",stateconfig:{state:0,state0:{},state1:{},state2:{},state3:{}}}},notificationimage:{CSS:{width:"100%",height:"100%",position:"relative","text-align":"center","background-repeat":"no-repeat","background-position":"center"},JS:{clickable:false,stateconfig:{state:0,state0:{"background-image":'url("'+top.tlbs.templatePath+'/images/app1.png")'},state1:{"background-image":'url("'+top.tlbs.templatePath+'/images/app2.png")'},state2:{},state3:{}}}},closeimage:{CSS:{width:"100%",height:"100%",position:"relative","text-align":"center","background-repeat":"no-repeat","background-position":"center"},JS:{clickable:false,stateconfig:{state:0,state0:{"background-image":'url("'+top.tlbs.templatePath+'/images/close_1.png")'},state1:{"background-image":'url("'+top.tlbs.templatePath+'/images/close_1.png")'}}}},notificationtext:{CSS:{"font-size":"0.55em",display:"block","font-family":"Microsoft Yahei",color:"#000000",height:"100%","text-align":"left"},JS:{textdata:"Welcome To Simple Toolbar.!",clickable:false,stateconfig:{state:0,state0:{},state1:{}}}},detailbutton:{CSS:{height:"40%",width:"70%","background-color":"#8B0000","border-radius":".1em","text-align":"center",overflow:"hidden",padding:"0.2em","word-break":"break-all","line-height":"1.3em",color:"#fff","align-items":"center","-webkit-box-align":"center","justify-content":"center",margin:"0 auto"},JS:{buttontext:"Detail",clickable:false,stateconfig:{state:0,state0:{},state1:{},state2:{},state3:{}},buttontextstyle:{CSS:{"font-size":"0.8em"},JS:{}}}}}};g.extendComponentData=function(i){g.compData=d.extendDeep(g.compData,i)};g.init=function(){h.registerComponentInstance(f.attr("cid"),g);g.extendComponentData(h.getInitProperties(g.cid));if(null!=g.compData.JS.autoclosetimeout&&g.compData.JS.autoclosetimeout>0){g.autoHide(g.compData.JS.autoclosetimeout);g.pcbarAutoHide(g.compData.JS.autoclosetimeout)}g.applyStyle()};g.$watch(g.param,function(i){if(g.param){g.compData=g.param;g.applyStyle()}});g.changeState=function(j,i){if(null!=j&&null!=j.cstate){if(g.compData.JS.stateconfig.state!=j.cstate){g.compData.JS.stateconfig.state=j.cstate;g.compData.JS.notificationimage.JS.stateconfig.state=j.cstate;g.compData.JS.leftimageholder.JS.stateconfig.state=j.cstate;g.compData.JS.detailholder.JS.stateconfig.state=j.cstate;g.$broadcast("stateChange");g.applyStyle();g.$evalAsync(function(){if(null!=i){i.resolve()}})}else{if(null!=i){i.resolve()}}}};g.updateMessage=function(j,i){if(j&&g.compData.JS.messagemapping){var k=d.transfer(j||{},g.compData.JS.messagemapping);g.compData.JS.notificationtext.JS.textdata=k}if(null!=i){i.resolve()}};g.show=function(j,i){g.compData.JS.detaileventdata={};if(j.packagelist&&j.packagelist[0]&&j.packagelist[0].list[0]){g.compData.JS.detaileventdata=j.packagelist[0].list[0]}g.compData.JS.detaileventdata.pageid=j.pageid;g.compData.JS.detaileventdata.state=j.state;g.compData.JS.detaileventdata.appname=j.appname;if(null==g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]||g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]!="100%"){g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]="100%";if(null!=g.compData.JS.autoclosetimeout&&g.compData.JS.autoclosetimeout>0){g.autoHide(g.compData.JS.autoclosetimeout)}g.$evalAsync(function(){if(null!=i){f.on(top.tlbs.transitionendEvent,function(k){i.resolve()})}})}else{if(null!=i){i.resolve()}}if(null!=g.compData.JS.packagedata){if(null!=g.compData.JS.detaileventdata[g.compData.JS.packagedata]&&null!=g.compData.JS.detaileventdata[g.compData.JS.packagedata][0]){g.compData.JS.detaileventdata=d.extendDeep(g.compData.JS.detaileventdata,g.compData.JS.detaileventdata[g.compData.JS.packagedata][0])}}g.applyStyle()};g.hide=function(j,i){if(null==g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]||g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]!="0%"){if(null==g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]&&null!=i){i.resolve();return}g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]="0%";g.$evalAsync(function(){if(null!=i){f.on(top.tlbs.transitionendEvent,function(k){i.resolve()})}})}else{if(null!=i){i.resolve()}}g.applyStyle()};g.pcbarshow=function(j,i){g.compData.JS.detaileventdata={};if(j.packagelist&&j.packagelist[0]&&j.packagelist[0].list[0]){g.compData.JS.detaileventdata=j.packagelist[0].list[0]}g.compData.JS.detaileventdata.pageid=j.pageid;g.compData.JS.detaileventdata.state=j.state;g.compData.JS.detaileventdata.appname=j.appname;if(null==g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]||g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]!="60%"){g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]="60%";g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["display"]="block";if(null!=g.compData.JS.autoclosetimeout&&g.compData.JS.autoclosetimeout>0){g.pcbarAutoHide(g.compData.JS.autoclosetimeout)}g.$evalAsync(function(){if(null!=i){f.on(top.tlbs.transitionendEvent,function(k){i.resolve()})}})}else{if(null!=i){i.resolve()}}if(null!=g.compData.JS.packagedata){if(null!=g.compData.JS.detaileventdata[g.compData.JS.packagedata]&&null!=g.compData.JS.detaileventdata[g.compData.JS.packagedata][0]){g.compData.JS.detaileventdata=d.extendDeep(g.compData.JS.detaileventdata,g.compData.JS.detaileventdata[g.compData.JS.packagedata][0])}}g.applyStyle()};g.pcbarhide=function(j,i){if(null==g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]||g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]!="0%"){if(null==g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]&&null!=i){i.resolve();return}g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]="0%";g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["display"]="none";g.$evalAsync(function(){if(null!=i){f.on(top.tlbs.transitionendEvent,function(k){i.resolve()})}})}else{if(null!=i){i.resolve()}}g.applyStyle()};g.iresize=function(j,i){g.compData.JS.fitdivminus="bnBar";g.$evalAsync(function(){if(null!=i){i.resolve()}})};g.updateButtonText=function(j,i){if(null!=j&&null!=j.buttontext){g.compData.JS.detailbutton.JS.buttontext=j.buttontext}g.$evalAsync(function(){if(null!=i){i.resolve()}})};g.eventMap.changeState=g.changeState;g.eventMap.updateMessage=g.updateMessage;g.eventMap.show=g.show;g.eventMap.pcbarshow=g.pcbarshow;g.eventMap.hide=g.hide;g.eventMap.pcbarhide=g.pcbarhide;g.eventMap.iresize=g.iresize;g.eventMap.updateButtonText=g.updateButtonText;g.$on(g.cid+"_handleEvent",function(l,j,k,i){g.eventMap[j](k,i)});g.closeClick=function(){h.fireEvent(g.cid,"closeclick",g.compData.JS.detaileventdata);var i={cdrType:"uitracingcdr",enable:true,storeData:false};g.compData.JS.cdrData={};g.compData.JS.cdrData={pageId:g.pageID,componentId:"notificationbar.close",iseComp:"0",};d.cdrService(i,g.compData.JS.cdrData);top.tlbs.notificationCdrData=null};g.detailClick=function(){h.fireEvent(g.cid,"detailclick",g.compData.JS.detaileventdata);if(null!=g.compData.JS.detaileventdata.appid){var i=h.getComponentScope(g.compData.JS.detaileventdata.appid);if(null!=i){i.changeState({cstate:1},null)}}var j={cdrType:"uitracingcdr",enable:true,storeData:true};g.compData.JS.cdrData={};g.compData.JS.cdrData={pageId:g.pageID,componentId:"notificationbar.detail",iseComp:"1",};d.cdrService(j,g.compData.JS.cdrData)};g.autoHide=function(i){b(function(){if(g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]=="100%"){h.fireEvent(g.cid,"autoclose",g.compData.JS.detaileventdata)}g.applyStyle();top.tlbs.notificationCdrData=null},i*1000)};g.pcbarAutoHide=function(i){b(function(){if(g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["width"]=="60%"){h.fireEvent(g.cid,"autoclose",g.compData.JS.detaileventdata);g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]["display"]="none"}g.applyStyle();top.tlbs.notificationCdrData=null},i*1000)};g.applyStyle=function(){if(null!=g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]){d.extendDeep(g.compData.CSS,g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state])}f.css(g.compData.CSS)}}],link:function(g,e,d,f){g.pageID=f.pageID;g.componentType="notificationbar";g.init()}}}]);
uiCore.directive('ititle', [
    'coreService',
    'coreUtils',
    '$timeout',
    function(coreService, coreUtils, $timeout) {
        return {
            restrict: 'E',
            replace: true,
            require: '^pid',
            scope: {
                param: '=param'
            },
            template: '<div {{param}}><imageholder cid="titleimage" ng-show="flag" param="compData.JS.titleimageconfig"></imageholder><irichtext cid="titletext" param="compData.JS.titletextconfig"></irichtext></div>',
            controller: [
                '$scope',
                '$element',
                '$attrs',
                'coreService',
                'coreUtils',
                function($scope, $element, $attrs, coreService, coreUtils) {
                    $scope.cid = $attrs.cid;
                    $scope.eventMap = {};
                    $scope.compData = {
                        'CSS': {},
                        'JS': {
                            'clickable': false,
                            'stateconfig': {
                                'state': 0,
                                'state0': {},
                                'state1': {}
                            },
                            'titletextconfig': {
                                'CSS': {
                                    'text-align': 'center'
                                },
                                'JS': {
                                    'clickable': false,
                                    'stateconfig': {
                                        'state': 0,
                                        'state0': {},
                                        'state1': {}
                                    }
                                }
                            }
                        }
                    };
                    $scope.setEvents = function() {
                        if ($scope.compData.JS.clickable) {
                            $element.bind('click', function() {
                                coreService.fireEvent($scope.cid, 'click_' + $scope.compData.JS.stateconfig.state);
                            });
                        }
                    };
                    $scope.$on($attrs['cid'] + '_handleEvent', function(event, cevent, args, deferred) {
                        if ($scope.eventMap[cevent]) {
                            $scope.eventMap[cevent](args);
                            if (null != deferred) {
                                deferred.resolve();
                            }
                        }
                    });
                    $scope.extendComponentData = function(componetData) {
                        $scope.compData = coreUtils.extendDeep($scope.compData, componetData);
                    };
                    $scope.init = function() {
                        coreService.registerComponentInstance($element.attr('cid'), $scope);
                        $scope.extendComponentData(coreService.getInitProperties($scope.cid));
                        $scope.flag = $scope.compData.JS.titleimageconfigflag;
                        $scope.applyStyle();
                    };
                    $scope.applyStyle = function() {
                        if (null != $scope.compData.JS.stateconfig['state' + $scope.compData.JS.stateconfig.state]) {
                            coreUtils.extendDeep($scope.compData.CSS, $scope.compData.JS.stateconfig['state' + $scope.compData.JS.stateconfig.state]);
                        }
                        $element.css($scope.compData.CSS);
                    };
                    $scope.$watch($scope.param, function(newValue) {
                        if ($scope.param) {
                            $scope.compData = $scope.param;
                            $scope.applyStyle();
                        }
                    });
                    $scope.updateTitleText = function(titleTextData, deferred) {
                        $scope.compData.JS.titletextconfig.JS.textdata = titleTextData.stitle;
                        if (null != deferred) {
                            deferred.resolve();
                        }
                    };
                    $scope.eventMap['updateTitleText'] = $scope.updateTitleText;
                    $scope.$on($scope.cid + '_handleEvent', function(eventObj, event, inputData, deferred) {
                        $scope.eventMap[event](inputData, deferred);
                    });
                }
            ],
            link: function($scope, $element, $attrs, ctl) {
                $scope.pageID = ctl.pageID;
                $scope.componentType = 'ititle';
                $scope.init();
            }
        };
    }
]);
uiCore.directive('loadingpage', function () {
	return {
		restrict : 'EA',
		replace : true,
		require : '^pid',
		template : '<div class="loading-page" ng-style="compData.JS.loadingposition.CSS">'
					+	'<div class="ui-loading">'
					+		'<div class="ui-page-img" ng-style="compData.JS.loadingimage"></div>'
					+		'<div class="ui-page-text" ng-bind="compData.JS.loadingtext"></div>'
					+	'</div>'
					+'</div>',
		scope : {},
		controller : [
			'$scope',
			'$element',
			'$attrs',
			'coreService',
			'coreUtils',
			'Const',
			function ($scope, $element, $attrs, coreService, coreUtils, Const) {
				var timeout = null;
				var DEFAULT_TIME = '-1';
				$scope.compData = {};
				$scope.eventMap = {};
				$scope.init = function () {
					coreService.registerComponentInstance($element.attr('cid'), $scope);
					var properties = coreService.getInitProperties($attrs['cid']) || {};
					$scope.compData.css = properties.CSS || {};
					$scope.compData.JS = properties.JS || {};
					$scope.compData.JS.loadingtext= $scope.compData.JS.loadingtext||'please wait...';
					$element.css($scope.compData.css);
					if($scope.compData.JS.loadingimage.CSS){
						$scope.compData.JS.loadingimage = $scope.compData.JS.loadingimage.CSS;
					}
					if ($scope.compData.JS.loadingposition && $scope.compData.JS.loadingposition.CSS){
						var loadingIconElement = angular.element($element[0].querySelector(".loading-page"));
						loadingIconElement.css($scope.compData.JS.loadingposition.CSS);
					}
				};
				$scope.show = function (param) {
					
					var timeoutTime = param && param.timeout ?  param.timeout : $scope.compData.JS.autohide || 10000 ;
					$element.css({
						"display" : "block"
					});
                    if (DEFAULT_TIME !== timeoutTime) { 
                 
                    	timeout = setTimeout($scope.hide, timeoutTime);	
                    }
				};

				$scope.hide = function () {
					$element.css({
						"display" : "none"
					});
					if (timeout) {
						clearTimeout(timeout);
						timeout = null;
					}

				};
				$scope.eventMap['show'] = $scope.show;
				$scope.eventMap['hide'] = $scope.hide;
				$scope.$on($attrs['cid'] + '_handleEvent', function (eventObj, event, inputData, deferred) {
					$scope.eventMap[event](inputData, deferred);
					if (null != deferred) {
						deferred.resolve();
					}
				});

			}
		],
		link : function ($scope, $element, $attrs, ctl) {
			$scope.pageID = ctl.pageID;
			$scope.componentType = "loadingpage";
			$scope.init();
		}
	};
});
uiCore.directive('verticalContainer', [
		'$timeout',
		function ($timeout) {
			return {
				restrict : 'E',
				replace : true,
				transclude : true,
				require : '^pid',
				scope : {},
				template : '<div class="ui-com-verticalContainer" ng-transclude></div>',
				controller : [
					'$scope',
					'$element',
					'$attrs',
					'coreService',
					'coreUtils',
					function ($scope, $element, $attrs, coreService, coreUtils) {
						$scope.cid = $attrs.cid;
						$scope.eventMap = {};
						$scope.compData = {};
						$scope.isPopupActive = false;
						$element.bind('click', function (e) {
							//$scope.expand();
							e.stopPropagation();
							e.preventDefault();
						});
						$scope.$on($scope.cid + '_handleEvent', function (eventObj, event, args, deferred) {
							$scope.eventMap[event](eventObj, args, deferred);
							if (null != deferred && $scope.currentStyle.isAnimation == 'false') {
								deferred.resolve();
							}
						});
						$scope.extendDeep = function extendDeep(dst) {
							angular.forEach(arguments, function (obj) {
								if (obj !== dst) {
									angular.forEach(obj, function (value, key) {
										if (dst[key] && dst[key].constructor && dst[key].constructor === Object) {
											extendDeep(dst[key], value);
										} else {
											dst[key] = value;
										}
									});
								}
							});
							return dst;
						};
						$scope.judgepage = function (event, args, deferred) {
							if(args.respparam){
								if(args.respparam.trafficusage && args.respparam.trafficusage.summary && args.respparam.trafficusage.summary.length != 0){
									if(null == args.respparam.trafficusage.summaryDetail || args.respparam.trafficusage.summaryDetail.length == 0 || !args.respparam.trafficusage.summaryDetail){
										$element.css("display","block");
										coreService.fireEvent($element.attr('cid'),"nosummarydetails",args);
									}else{
										$element.css("display","block");
										coreService.fireEvent($element.attr('cid'),"usagesummarypage",args);
									}
								}
								else{
									$element.css("display","none");
									coreService.fireEvent($element.attr('cid'), "datapageerror",args);
								}
							}else{
								coreService.fireEvent($element.attr('cid'), "datapageerror",args);
							}
						};
						//add begin by tWX330131 for DTS2017011709669 
						$scope.judgedetailspage = function (event, args, deferred) {
							if(args.respparam){
								if(args.respparam.detailusage && args.respparam.detailusage.details && args.respparam.detailusage.details.length != 0){
									$element.css("display","block");
									coreService.fireEvent($element.attr('cid'),"showdetailpage",args);
								}else{
									$element.css("display","none");
									coreService.fireEvent($element.attr('cid'), "errorpage",args);
								}
							}
						};
						//add end by tWX330131
						
						$scope.eventMap['judgepage'] = $scope.judgepage;
						$scope.eventMap['judgedetailspage'] = $scope.judgedetailspage;
						$scope.init = function () {
							coreService.registerComponentInstance($element.attr('cid'), $scope);
							var properties = coreService.getInitProperties($attrs['cid']) || {},
							jsProp = properties.JS || {},
							cssProp = properties.CSS || {},
							jsData = coreUtils.String2JSON($attrs['jsdata']),
							cssData = coreUtils.String2JSON($attrs['cssdata']);
							$scope.jsProp = coreUtils.extendDeep(jsProp, jsData);
							$scope.cssProp = coreUtils.extendDeep(cssProp, cssData);
							if ($scope.jsProp.type) {
								$scope.type = $scope.jsProp.type;
								$scope.currentStyle = $scope.jsProp[$scope.jsProp.type];
							} else {
								$scope.type = 'fixed';
								$scope.currentStyle = {
									'extendable' : 'false',
									'position' : 'relative',
									'width' : '150px',
									'height' : '100px'
								};
							}
						};
						$scope.expand = function (event, args, deferred) {
							if ($scope.jsProp.expand && $scope.jsProp.expand.height) {
								$element.css($scope.jsProp.expand);
							} else {
								$element.css('height', $scope.mainDivHeight);
							}
							if (null != deferred) {
								deferred.resolve();
								/*
								var _transitionEnd = /webkit/i.test(navigator.userAgent) ? 'webkitTransitionEnd' : 'transitionend';
								$element.one(_transitionEnd, function(e) {
								e.stopPropagation();
								deferred.resolve();
								});
								 */
							}
						};
						$scope.verifyChildren = function () {
							var childrens = $element[0].children;
							var element = null;
							var position = null;
							angular.forEach(childrens, function (value, key) {
								element = angular.element(value);
								position = element.css('position');
								if (position == 'fixed' || position == 'absolute')
									element.css('position', 'relative');
							});
						};
						$scope.collapse = function (event, args, deferred) {
							$element.css('height', 0);
							if (null != deferred) {
								deferred.resolve();
								/*var _transitionEnd = /webkit/i.test(navigator.userAgent) ? 'webkitTransitionEnd' : 'transitionend';
								$element.one(_transitionEnd, function(e) {
								e.stopPropagation();
								deferred.resolve();
								});*/
							}
						};
						$scope.hide = function (event, args, deferred) {
							$element.css('display', "none");
							if (null != deferred) {
								deferred.resolve();

							}
						};
						$scope.display = function (event, args, deferred) {
							$element.css('display', "block");
							if ($scope.jsProp.expand && $scope.jsProp.expand.height) {
								$element.css($scope.jsProp.expand);
							} else {
								$element.css('height', $scope.mainDivHeight);
							}
							if (null != deferred) {
								deferred.resolve();

							}
						};
						$scope.collapsePopup = function (event, args, deferred) {
							if (parseInt($element.css('height')) == 0) {
								deferred.resolve();
								return false;
							}
							$element.css('height', 0);
							if (null != deferred) {
								//var _transitionEnd = /webkit/i.test(navigator.userAgent) ? 'webkitTransitionEnd' : 'transitionend';
								if (top.tlbs.isTransitionSupported) {
									$element.one(top.tlbs.transitionendEvent, function (e) {
										e.stopPropagation();
										deferred.resolve();
									});
								} else {
									e.stopPropagation();
									deferred.resolve();
								}
							}
						};
						$scope.eventMap['expand'] = $scope.expand;
						$scope.eventMap['collapse'] = $scope.collapse;
						$scope.eventMap['collapsepopup'] = $scope.collapsePopup;
						$scope.eventMap['hide'] = $scope.hide;
						$scope.eventMap['display'] = $scope.display;
						$scope.applyElementCss = function () {
							$element.css($scope.cssProp);
							$element.css($scope.currentStyle);
							if ($scope.currentStyle.isPopup == 'true') {
								$element.css('height', 0);
							}
						};
						/*$scope.loadChildrens = function(transcludeFn) {
						transcludeFn(function(clone, scope) {
						$element.append(clone);
						});
						};*/
						$scope.extendableComponent = function () {
							var childrens = $element[0].children;
							$scope.mainDivWidth = 0;
							$scope.mainDivHeight = 0;
							var childElementWidth = 0;
							var style = null;
							angular.forEach(childrens, function (value, key) {
								childElementWidth = 0;
								style = window.getComputedStyle(childrens[key], null);
								childElementWidth += parseInt(childrens[key].offsetWidth) + parseInt(style['marginLeft']) + parseInt(style['marginRight']);
								$scope.mainDivHeight += parseInt(childrens[key].offsetHeight) + parseInt(style['marginTop']) + parseInt(style['marginBottom']);
								if ($scope.mainDivWidth <= childElementWidth)
									$scope.mainDivWidth = childElementWidth;
							});
							$scope.mainDivWidth += 'px';
							$scope.mainDivHeight += 'px';
							if ($scope.currentStyle.isPopup == 'true') {
								$element.css({
									'width' : $scope.mainDivWidth,
									'height' : 0
								});
							} else {
								$element.css({
									'width' : $scope.mainDivWidth,
									'height' : $scope.mainDivHeight
								});
							}
						};
					}
				],
				link : function ($scope, $element, $attributes, $controller, ctrl) {
					$scope.pageID = $controller.pageID;
					$scope.componentType = 'vertical-container';
					$scope.init();
					//$scope.loadChildrens($transcludeFn);
					$scope.applyElementCss();
					$scope.mainDivHeight = $scope.currentStyle.height || $scope.cssProp.height;
					if ($scope.currentStyle.modifyChild == 'true') {
						$scope.verifyChildren();
					}
					if ($scope.currentStyle.extendable == 'true') {
						$scope.extendableComponent();
					} //alert($scope.mainDivHeight);
				}
			};
		}
	]);
uiCore.directive('iappholder', [
    'coreService',
    'coreUtils',
    '$timeout',
    function(coreService, coreUtils, $timeout) {
        return {
            restrict: 'AE',
            replace: true,
            template: '<div></div>',
            transclude: true,
            scope: {},
            require: '^pid',
            controller: [
                '$scope',
                '$element',
                '$attrs',
                '$compile',
                '$templateCache',
                '$interval',
                function($scope, $element, $attrs, $compile, $templateCache, $interval) {
                    $scope.cid = $attrs.cid;
                    //BEGIN SCG TOOLBAR V5R5C60LG0006 SCG_VGS_TB_R0140 K70924 09.10.2015
                    $scope.tempAccessTime = undefined;
                    top.tlbs.lastAccessTime = "false";
                    //END SCG TOOLBAR V5R5C60LG0006 SCG_VGS_TB_R0140 K70924 09.10.2015
                    $scope.eventMap = {};
                    $scope.compData = {
                        'CSS': {},
                        'JS': {
                            'clickable': false,
                            'animation': false,
                            'custommessage': true,
                            'pageStack': [],
                            'apploadState': false,
                            'stateconfig': {
                                'state': 0,
                                'state0': {},
                                'state1': {}
                            },
                            'currentpageid': '',
                            'backimageconfig': {
                                'CSS': {},
                                'JS': {
                                    'clickable': false,
                                    'stateconfig': {
                                        'state': 0,
                                        'state0': {},
                                        'state1': {}
                                    }
                                }
                            },
                            'closeimageconfig': {
                                'CSS': {},
                                'JS': {
                                    'clickable': false,
                                    'stateconfig': {
                                        'state': 0,
                                        'state0': {},
                                        'state1': {}
                                    }
                                }
                            },
                            'progresswindowconfig': {
                                'CSS': {
                                    'width': '100%',
                                    'height': '100%',
                                    'display': 'none'
                                },
                                'JS': {}
                            },
                            'progresstextconfig': {
                                'CSS': {
                                    'position': 'relative',
                                    'border-radius': '.1em .1em .1em .1em',
                                    'width': '10em',
                                    'height': '2em',
                                    'line-height': '1.8em',
                                    'top': '6.75em',
                                    'text-align': 'center',
                                    'background-color': '#4C4C4C',
                                    'margin': '0 auto',
                                    'color': 'white'
                                }
                            },
                            'statusholderconfig': {
                                'CSS': {
                                    'display': 'none',
                                    'height': '4.5em',
                                    'top': '30%',
                                    'color': '#BDBDBD',
                                    'border': '0.05em solid #F2F2F2',
                                    'background-color': '#F9F9F9',
                                    'position': 'absolute',
                                    'width': '50%',
                                    'left': '25%',
                                    'line-height': '100%',
                                    'text-align': 'left',
                                    '-webkit-tap-highlight-color': 'rgba(0,0,0,0)',
                                    'list-style': 'none outside none',
                                    'padding': '0',
                                    'z-index': '2047483647',
                                },
//                                'JS': {
//                                    'statustext': '<p class="img"></p><p class="info"><i res="PLEASE_RELOAD">对不起！<br>服务器正忙.<br>请重试.</i></p>'
//                                }
                            },
                            'pagercompmapping': {
                                'goldcoin': 'goldcoinlayout'
                            }
                        }
                    };
                    $scope.extendComponentData = function(componetData) {
                        $scope.compData = coreUtils.extendDeep($scope.compData, componetData);
                    };
                    var loadAppObject = function() {};
                    loadAppObject.prototype.eexecute = function() {
                        if (!$scope.compData.JS.apploadState) {
                            var elementTemplateCache = $templateCache.get($attrs.templateurl);
                            elementTemplateCache = '<div id="progressholder"><div id="progresstextholder">{{compData.JS.progresstextconfig.JS.progresstext}}</div></div><div id="statusholder" class="reload"><horizontal-container cid="statusholder" param="compData.JS.statusholder"><imageholder ng-show="compData.JS.custommessage" cid="statusholderimage" param="compData.JS.statusholderimage"></imageholder><richtext ng-show="compData.JS.custommessage" cid="titletext" param="compData.JS.statustext"></richtext></horizontal-container></div>' + elementTemplateCache;
                            $element.html(elementTemplateCache);
                            $compile($element.contents())($scope);
                            $scope.compData.JS.apploadState = true;
                            $scope.ctrlPageGroup = {};
                            $scope.progressHolderElement = angular.element($element[0].querySelector('[id="progressholder"]'));
                            $scope.progressTextHolderElement = angular.element($element[0].querySelector('[id="progresstextholder"]'));
                            $scope.statusHolder = angular.element($element[0].querySelector('[id="statusholder"]'));
                            $scope.titleBackImage = angular.element($element[0].querySelector('[id="titlebackimage"]'));
                            var alllLoad = angular.element($element[0].querySelectorAll('[lload="0"]'));
                            for (var i = 0; i < alllLoad.length; i++) {
                                var localElement = angular.element(alllLoad[i]);
                                $scope.ctrlPageGroup[localElement.attr('pid')] = localElement;
                            }
                        }
                    };
                    $scope.loadApps = function(stateObject, deferred) {
                        var loadApp = new loadAppObject().eexecute();
                        if (null != deferred) {
                            deferred.resolve();
                        }
                    };
                    $scope.eventMap['loadApps'] = $scope.loadApps;
                    $scope.lloadApps = function(loadObject, deferred) {
                        if (null != loadObject.applist && loadObject.applist.length > 0) {
                            var pageidSplit = loadObject.applist.split(',');
                            new loadAppArray().eexecute(pageidSplit, deferred);
                        } else if (null != deferred) {
                            deferred.resolve();
                        }
                    };
                    var loadAppArray = function() {};

                    loadAppArray.prototype.eexecute = function(pageArray, deferred) {
                        var j = pageArray.length,
                            count = 0,
                            pageArrayIds = pageArray,
                            deferred = deferred;
                        var executeFunction = function() {
                            var pageObject = $scope.ctrlPageGroup[pageArrayIds[count]];
                            if (null != pageObject && pageObject.attr('lload') == 0) {
                                new loadSingleApp(pageObject, pageArrayIds[count]).eexecute();
                            }
                            count = count + 1;
                            if (count == j && null != deferred) {
                                $timeout(function() {
                                    deferred.resolve();
                                });
                            }
                        };
                        $interval(executeFunction, 10, j);
                    };

                    var loadSingleApp = function(singleAppObject, pageid) {
                        this.singleAppObject = singleAppObject;
                        this.pageid = pageid;
                    };
                    loadSingleApp.prototype.eexecute = function() {
                        this.singleAppObject.attr('lload', '1');
                        $scope.ctrlPageGroup[this.pageid] = null;
                    };
                    $scope.eventMap['lloadApps'] = $scope.lloadApps;
                    $scope.init = function() {
                        coreService.registerComponentInstance($scope.cid, $scope);
                        $scope.extendComponentData(coreService.getInitProperties($scope.cid));
                        $timeout(function() {
                            $scope.loadApps();
                            $scope.applyStyle();
                            $scope.initNext();
                            coreService.fireEvent($scope.cid, 'init', null);
                        }, 500);
                    };
                    $scope.initNext = function() {
                        $scope.statusHolder.css($scope.compData.JS.statusholderconfig.CSS);
                        if (!$scope.compData.JS.custommessage)
                            $scope.statusHolder[0].innerHTML = $scope.compData.JS.statusholderconfig.JS.statustext;
                    };
                    $scope.updateStatusMessage = function(stateObject, deferred) {
                        $scope.statusHolder[0].innerHTML = stateObject.cmessage;
                        if (null != deferred) {
                            deferred.resolve();
                        }
                    };
                    $scope.updateCustomStatusMessage = function(stateObject, deferred) {
                        var textHolder = angular.element($element[0].querySelector('[cid="titletext"]'));
                        textHolder[0].innerHTML = stateObject.cmessage;
                        if (null != deferred) {
                            deferred.resolve();
                        }
                    };
                    $scope.showStatus = function (data) {
					
                    	$timeout(function () {
						if(data&&data.pageid==$scope.compData.JS.currentpageid){
                    		$scope.statusHolder.css('display', 'block');
								}
                    	});
						
                    };
                    $scope.hideStatusMessage = function() {
					 $scope.statusHolder.css('display', 'none');
                    };
                    $scope.applyStyle = function() {
                        if (null != $scope.compData.JS.stateconfig['state' + $scope.compData.JS.stateconfig.state]) {
                            coreUtils.extendDeep($scope.compData.CSS, $scope.compData.JS.stateconfig['state' + $scope.compData.JS.stateconfig.state]);
                        }
                        $element.css($scope.compData.CSS);
                        $scope.progressHolderElement.css($scope.compData.JS.progresswindowconfig.CSS);
                        $scope.progressTextHolderElement.css($scope.compData.JS.progresstextconfig.CSS);
                        if (null != $scope.titleBackImage) {
                            if (null != $scope.compData.JS.backimageconfig.JS.stateconfig['state' + $scope.compData.JS.backimageconfig.JS.stateconfig.state]) {
                                coreUtils.extendDeep($scope.compData.JS.backimageconfig.CSS, $scope.compData.JS.backimageconfig.JS.stateconfig['state' + $scope.compData.JS.backimageconfig.JS.stateconfig.state]);
                            }
                            $scope.titleBackImage.css($scope.compData.JS.backimageconfig.CSS);
                        }
                    };
                    $scope.changeState = function(stateObject, deferred) {
                        if (null != stateObject && null != stateObject.cstate) {
                            if ($scope.compData.JS.stateconfig.state != stateObject.cstate) {
                                $scope.compData.JS.stateconfig.state = stateObject.cstate;
                                $scope.applyStyle();
                                $scope.$evalAsync(
                                    function() {
                                        if (null != deferred) {
                                            if ($scope.compData.JS.animation) {
                                                //var _transitionEnd = /webkit/i.test(navigator.userAgent) ? 'webkitTransitionEnd' : 'transitionend';
                                                if (top.tlbs.isTransitionSupported) {
                                                    $element.on(top.tlbs.transitionendEvent, function(e) {
                                                        deferred.resolve();
                                                    });
                                                } else {
                                                    deferred.resolve();
                                                }
                                            } else {
                                                deferred.resolve();
                                            }
                                        }
                                    });
                            } else if (null != deferred) {
                                deferred.resolve();
                            }
                        }
                    };
                    $scope.eventMap['changeState'] = $scope.changeState;
                    $scope.eventMap['showStatus'] = $scope.showStatus;
                    $scope.eventMap['updateStatusMessage'] = $scope.updateStatusMessage;
                    $scope.eventMap['updateCustomStatusMessage'] = $scope.updateCustomStatusMessage;
					$scope.eventMap['hideStatusMessage'] = $scope.hideStatusMessage;
                    $scope.changeCurrentPageID = function(pageIDConfig, deferred) {
                        if (null != pageIDConfig && null != pageIDConfig.pageid && pageIDConfig.pageid.length > 0) {
                            if ($scope.compData.JS.progresswindowconfig.CSS['display'] == 'block') {
                                $scope.compData.JS.progresswindowconfig.CSS['display'] = 'none';
                            }
                            //BEGIN SCG TOOLBAR V5R5C60LG0006 SCG_VGS_TB_R0140 K70924 09.10.2015
                            $scope.updateLastAccess();
                            //END SCG TOOLBAR V5R5C60LG0006 SCG_VGS_TB_R0140 K70924 09.10.2015
                            $scope.hideStatusMessage();
                            if (null != pageIDConfig.cpageid && pageIDConfig.cpageid != $scope.compData.JS.currentpageid) {
                                return;
                            }
                            var rootComponentConfig = $scope.compData.JS.pagercompmapping[pageIDConfig.pageid];
                            if (null != rootComponentConfig && rootComponentConfig.length > 0) {
                                var compScope = coreService.getComponentScope(rootComponentConfig);
                                if (null != compScope) {
                                    typeof compScope.showcb === 'function' &&
                                        compScope.showcb();
                                }
                            }
                            var cdrConfig = {
                                'cdrType': 'uidisplaycdr',
                                'enable': true,
                                'storeData': false
                            };
                            var cdrDataOpen = {
                                'pageId': pageIDConfig.pageid,
                                'displayType': 1,
                                'displayResult': 0
                            };
                            if (pageIDConfig.pageid != $scope.compData.JS.currentpageid) {
                                var cdrDataClose = {
                                    'pageId': $scope.compData.JS.currentpageid,
                                    'displayType': 0,
                                    'displayResult': 0
                                };
                                if (null != $scope.compData.JS.currentpageid && $scope.compData.JS.currentpageid.length > 0 && $scope.compData.JS.currentpageid != "pageId") {
                                    coreUtils.cdrService(cdrConfig, cdrDataClose);
                                }
                                coreUtils.cdrService(cdrConfig, cdrDataOpen);
                            } else {
                                coreUtils.cdrService(cdrConfig, cdrDataOpen);
                            }
                            $scope.compData.JS.currentpageid = pageIDConfig.pageid;
                            if (null != pageIDConfig.state && '1' == pageIDConfig.state) {
                                $scope.compData.JS.pageStack.push(pageIDConfig.pageid);
                                if ($scope.compData.JS.pageStack.length > 1) {
                                    $scope.compData.JS.backimageconfig.JS.stateconfig.state = 1;
                                } else {
                                    $scope.compData.JS.backimageconfig.JS.stateconfig.state = 0;
                                }
                                //add begin by tWX330131 for DTS2017011706546
                            } else if(pageIDConfig.pageid =="idetails"){
                            	$scope.compData.JS.pageStack[0] = "itraffic";
                            	$scope.compData.JS.pageStack[1] = pageIDConfig.pageid;
                            	$scope.compData.JS.backimageconfig.JS.stateconfig.state = 1;
                            	//add end by tWX330131
                            }else{
                            	$scope.compData.JS.pageStack = [];
                                $scope.compData.JS.pageStack.push(pageIDConfig.pageid);
                                $scope.compData.JS.backimageconfig.JS.stateconfig.state = 0;
                            }
                            $scope.compData.JS.backimageconfigtouch.JS.stateconfig.state = $scope.compData.JS.backimageconfig.JS.stateconfig.state;
                            $scope.resetScroll($scope.compData.JS.currentpageid);
                        }
                        if (null != deferred) {
                            deferred.resolve();
                        }
                        $scope.applyStyle();
                        if ((coreUtils.getRemoteServiceStatus('trafficquery') != 0 || coreUtils.getRemoteServiceStatus('trafficdetails') != 0) && $scope.compData.JS.currentpageid == $scope.compData.JS.pageid) {
                            $scope.statusHolder.css('display', 'block');
                        } else {
                            $scope.statusHolder.css('display', 'none');
                        }
                        var currentpage = angular.element($element[0].querySelectorAll('[pid="' + pageIDConfig.pageid + '"]'));
                        
                        if (!currentpage[0]){
                        	console.log("The page of ", pageIDConfig.pageid, " doesn't exist.");
                        }
                        
                        var lload = currentpage[0].getAttribute('lload');
                        if (lload == '0') {
                            $scope.lloadApps({
                                "applist": pageIDConfig.pageid
                            });
                            checkPageLoad(pageIDConfig.pageid);

                        } else if (pageIDConfig.reload != '0') {
                            coreService.fireEvent((currentpage[0].getAttribute('pagesrcid') || pageIDConfig.pageid) + 'show', 'recvd');
                        }
                    };

                    function checkPageLoad(pageid) {
                        var currentpage = angular.element($element[0].querySelectorAll('[pid="' + pageid + '"]'));
                        var html = currentpage[0].innerHTML;
                        if ("<div></div>" == html) {
                            timer = $timeout(function() {
                                checkPageLoad(pageid);
                            }, 50);
                        } else {
                            if (timer) {
                                clearTimeout(timer);
                            }
                            coreService.fireEvent((currentpage[0].getAttribute('pagesrcid') || pageid) + 'show', 'recvd');
                        }
                    };
                    $scope.eventMap['changeCurrentPageID'] = $scope.changeCurrentPageID;
                    $scope.popPage = function(args, deferred) {
                        if (null != $scope.compData.JS.pageStack) {
                            var poppage = $scope.compData.JS.pageStack.pop();
                            if (null != poppage) {
                                if (poppage == $scope.compData.JS.currentpageid) {
                                    $scope.popPage();
                                } else {
	                                if($scope.compData.JS.jump2page && poppage==$scope.compData.JS.jump2page){
	                               		var getpageid= $scope.compData.JS.pageStack.pop();
	                                	$scope.changeCurrentPageID({
	                                            'pageid': getpageid,
	                                            'state': 0
	                                        }, deferred);
	                               	}else{
	                               		 $scope.changeCurrentPageID({
	                                            'pageid': poppage,
	                                            'state': 1
	                                        }, deferred);
	                               	}
                                }
                            } else {
                                $scope.compData.JS.pageStack = [];
                                $scope.compData.JS.backimageconfig.JS.stateconfig.state = 0;
                            }
                        }
                        if (null != deferred) {
                            deferred.resolve();
                        }
                    };
                    $scope.eventMap['popPage'] = $scope.popPage;
                    $scope.$on($scope.cid + '_handleEvent', function(eventObj, event, inputData, deferred) {
                        $scope.eventMap[event](inputData, deferred);
                    });
                    $scope.isCurrentPage = function(pageID) {
                        return $scope.compData.JS.currentpageid == pageID ? true : false;
                    };
                    $scope.showProgress = function(stateObject, deferred) {
                        $scope.compData.JS.progresswindowconfig.CSS['display'] = 'block';
                        if (null != deferred) {
                            deferred.resolve();
                        }
                        $scope.applyStyle();
                    };
                    $scope.eventMap['showProgress'] = $scope.showProgress;

                    $scope.hideProgress = function(stateObject, deferred) {
                        $scope.compData.JS.progresswindowconfig.CSS['display'] = 'none';
                        if (null != deferred) {
                            deferred.resolve();
                        }
                        $scope.applyStyle();
                    };
                    $scope.eventMap['hideProgress'] = $scope.hideProgress;

                    $scope.writeCPageOpenCDR = function(stateObject, deferred) {
                        var cdrConfig = {
                            'cdrType': 'uidisplaycdr',
                            'enable': true,
                            'storeData': false
                        };
                        var cdrData = {
                            'pageId': $scope.compData.JS.currentpageid,
                            'displayType': 1,
                            'displayResult': 0
                        };
                        coreUtils.cdrService(cdrConfig, cdrData);
                        if (null != deferred) {
                            deferred.resolve();
                        }
                    };
                    $scope.writeCPageCloseCDR = function(stateObject, deferred) {
                        var cdrConfig = {
                            'cdrType': 'uidisplaycdr',
                            'enable': true,
                            'storeData': false
                        };
                        var cdrData = {
                            'pageId': $scope.compData.JS.currentpageid,
                            'displayType': 0,
                            'displayResult': 0
                        };
                        coreUtils.cdrService(cdrConfig, cdrData);
                        if (null != deferred) {
                            deferred.resolve();
                        }
                        $scope.compData.JS.currentpageid = '';
                    };
                    $scope.eventMap['writeCPageOpenCDR'] = $scope.writeCPageOpenCDR;
                    $scope.eventMap['writeCPageCloseCDR'] = $scope.writeCPageCloseCDR;

                    $scope.resetScroll = function(pageId) {
                        var pageObject = $element[0].querySelector('[pid="' + pageId + '"]');
                        if (null != pageObject) {
                            var scrollObject = pageObject.querySelector('[class="ui-com-vscroll-wrapper"]');
                            if (null != scrollObject) {
                                var scrollObjectAngular = angular.element(scrollObject);
                                scrollObjectAngular.css({
                                    '-webkit-transform': 'translate3d(0,0,0)',
                                    '-moz-transform': 'translate3d(0,0,0)',
                                    '-ms-transform': 'translate3d(0,0,0)',
                                    'transform': 'translate3d(0,0,0)',
                                    '-o-transform': 'translate(0,0)'
                                });
                            }
                        }
                    };

                    //BEGIN SCG TOOLBAR V5R5C60LG0006 SCG_VGS_TB_R0140 K70924 09.10.2015
                    $scope.updateLastAccess = function() {
                        var currTime = new Date().getTime();

                        if (!$scope.tempAccessTime) {
                            $scope.tempAccessTime = currTime;

                            top.tlbs.lastAccessTime = "true"
                        } else {
                            var diffTime = currTime - $scope.tempAccessTime;

                            if (diffTime > 120000) { //If difference is more than 2 minutes
                                $scope.tempAccessTime = currTime;
                                top.tlbs.lastAccessTime = "true"
                            } else {
                                top.tlbs.lastAccessTime = "false";
                            }
                        }
                    };
                    //END SCG TOOLBAR V5R5C60LG0006 SCG_VGS_TB_R0140 K70924 09.10.2015

                    $scope.clearGlobalData = function(eventObject, deferred) {
                        if (null != eventObject && null != eventObject.datakey) {
                            var dataKeyArray = eventObject.datakey.split(',');
                            for (var i = 0; i < dataKeyArray.length; i++) {
                                top.tlbs[dataKeyArray[i]] = null;
                            }
                        }
                        if (null != deferred) {
                            deferred.resolve();
                        }
                    };
                    $scope.eventMap['clearGlobalData'] = $scope.clearGlobalData;
                    $scope.getsubdatafunc = function(stateObject, deferred) {
                    	$scope.hideProgress();
                		$scope.changeCurrentPageID({'pageid': "istore",'state':"0"});
                        if(stateObject.respparam && stateObject.respparam.subscribtionstatus && stateObject.respparam.subscribtionstatus=="0"){
                        	$scope.changeCurrentPageID({
                                'pageid': "isubscriberesult",
                                'state': "1"
                        	}, deferred);
                        	coreService.fireEvent($scope.cid, 'selectstore');
                        	
                        	
                        }else{
                      	  $scope.changeCurrentPageID({
                                'pageid': "ierror",
                                'state': "1"
                            }, deferred);
                      	  coreService.fireEvent($scope.cid, 'selectstore');
                        }
                      };
                      $scope.eventMap['getsubdatafunc'] = $scope.getsubdatafunc;
                }
            ],
            link: function(scope, element, attrs, ctrl) {
                scope.pageID = ctrl.pageID;
                scope.componentType = 'iappholder';
                scope.init();
            }
        };
    }
]);
uiCore.directive("itable",["coreService","coreUtils","$timeout",function(c,a,b){return{restrict:"AE",replace:true,template:"<div></div>",require:"^pid",scope:{},controller:["$scope","$element","$attrs","$templateCache","$compile",function(g,f,e,d,i){var h=/preto/i.test(navigator.userAgent)||/opera/i.test(navigator.userAgent);g.cid=e.cid;g.eventMap={};g.compData={CSS:{"border-collapse":"collapse","border-spacing":"0",margin:"0"},JS:{clickable:false,tableConfigRespPath:"",tableDataRespPath:"",tableArrayDataRespPath:"",templateUrl:"",table_config:[],defaultvalues:false,table_data:[],runtimeDataPath:"respparam.packages",runtimeDataKey:"id",filterKey:"",filterValue:"",filterType:"",cdrConfig:{uinotiftracingcdr:{cdrType:"uinotiftracingcdr",enable:false,storeData:false}}}};g.runtimeData={};g.getColData=function(j,k){return g.compData.JS.table_data[k][g.compData.JS.table_config[j].data]};g.extendComponentData=function(j){g.compData=a.extendDeep(g.compData,j)};g.init=function(){g.compData.JS.templateUrl=e.templateUrl||g.compData.JS.templateUrl;c.registerComponentInstance(g.cid,g);g.extendComponentData(c.getInitProperties(g.cid));if(g.compData.JS.defaultvalues){g.compData.JS.table_dataarray=[];g.compData.JS.table_dataarray.push(g.compData.JS.table_data);g.compData.JS.table_data=g.compData.JS.table_dataarray}g.initNext()};g.initNext=function(){var j=d.get(g.compData.JS.templateUrl);f.html(j);i(f.contents())(g);g.tableElement=angular.element(f[0].querySelector("table"));g.tableElement.css(g.compData.CSS)};g.getTemplateUrl=function(){return g.compData.JS.templateUrl};g.updateTableConfig=function(j){if(g.compData.JS.tableConfigRespPath){g.compData.JS.table_config=a.transfer(j,g.compData.JS.tableConfigRespPath)}else{if(null!=j){g.compData.JS.table_config=j}}};g.updateTableData=function(j){if(g.compData.JS.tableDataRespPath){g.compData.JS.table_data=a.transfer(j,g.compData.JS.tableDataRespPath)}else{if(null!=j){g.compData.JS.table_data=j}}g.tableDataUpdateCommonTask(j)};g.updateArrayTableData=function(j){g.compData.JS.tempTableData=[];if(null!=j.respparam.recommandations){for(var k=0;k<j.respparam.recommandations.length;k++){g.compData.JS.tempTableData=g.compData.JS.tempTableData.concat(j.respparam.recommandations[k].list)}if(g.compData.JS.tempTableData.length>0){g.compData.JS.table_data=g.compData.JS.tempTableData;g.tableDataUpdateCommonTask(j)}}};g.tableDataUpdateCommonTask=function(j){g.updateTable();if(null!=j.respparam.taskId&&j.respparam.taskId.length>0){a.recordTracingCdr(g.pageID,e.cid,g.compData.JS.cdrConfig)}};g.click=function(k){g.eventdata=k;var j=a.extendDeep({},g.eventdata||g.edata);c.fireEvent(f.attr("cid"),e.event||"btnclick",j)};g.isLast=function(k){var j=k?null:g.compData.JS.rowborder;return j};g.showcb=function(){if(null!=g.compData.JS.table_data&&g.compData.JS.table_data.length>0){c.fireEvent(g.cid,"updatedata1",null)}else{c.fireEvent(g.cid,"updatedata0",null)}};g.updateTable=function(){if(null!=g.compData.JS.table_data&&g.compData.JS.table_data.length>0){c.fireEvent(g.cid,"updatedata1",null)}else{c.fireEvent(g.cid,"updatedata0",null)}var j=angular.element(f[0].parentNode);if(j&&j[0]&&j[0].className=="ui-com-vscroll-wrapper"){if(h){j.css("-o-transform","translate(0,0)");j.css("transform","translate(0,0)")}else{j.css("-webkit-transform","translate3d(0,0,0)");j.css("-moz-transform","translate3d(0,0,0)");j.css("-ms-transform","translate3d(0,0,0)");j.css("transform","translate3d(0,0,0)")}}if(j&&j[0]&&j[0].className=="ui-com-wscroll-wrapper"){angular.element(f[0]).css("margin-top","0px")}};g.updateTableDatawithMerge=function(l){var k={};var n=g.compData.JS.tableDataRespPath.split(",");if(n.length>0){var m=0;var q=a.transfer(l,n[0]);var p=0;for(data in q){if(p>=g.compData.JS.startposition-1){k[m]=q[data];m++}p++}var o=a.transfer(l,n[1]);for(data in o){k[m]=o[data];m++}b(function(){g.compData.JS.table_data={};g.$digest();if(g.compData.JS.startposition>0){g.compData.JS.table_data=k}g.$digest()});return}};g.handleClick=function(j){if(null!=j&&j.length!=0){c.commonServiceRef.dynamicService(null,{serviceType:"urlservice",openurl:j})}};g.updateRunTimeData=function(j){if(g.compData.JS.runtimeDataPath){g.runtimeData=a.transfer(j,g.compData.JS.runtimeDataPath)}else{if(null!=j){g.runtimeData=j}}};g.filterRunTimeData=function(j){if(null!=g.runtimeData&&null!=j){g.compData.JS.table_data=g.runtimeData[a.transfer(j,g.compData.JS.runtimeDataKey)];g.updateTable()}};g.updateTableDataWithFilter=function(j){g.compData.JS.tempTableData=[];var l=null;if(g.compData.JS.tableDataRespPath){l=a.transfer(j,g.compData.JS.tableDataRespPath)}else{if(null!=j){l=j}}for(var k=0;k<l.length;k++){var n=l[k];var m=n[g.compData.JS.filterKey];if(null!=m){if("0"==g.compData.JS.filterType){if(m!=g.compData.JS.filterValue){g.compData.JS.tempTableData=g.compData.JS.tempTableData.concat(n)}}else{if("1"==g.compData.JS.filterType){if(m==g.compData.JS.filterValue){g.compData.JS.tempTableData=g.compData.JS.tempTableData.concat(n)}}}}}if(g.compData.JS.tempTableData.length>0){g.tableElement.css("display","table");g.compData.JS.table_data=g.compData.JS.tempTableData;g.tableDataUpdateCommonTask(j)}};g.clickDisable=function(){};g.eventMap.updateTableConfig=g.updateTableConfig;g.eventMap.updateTableData=g.updateTableData;g.eventMap.updateTableDatawithMerge=g.updateTableDatawithMerge;g.eventMap.updateRunTimeData=g.updateRunTimeData;g.eventMap.filterRunTimeData=g.filterRunTimeData;g.eventMap.updateArrayTableData=g.updateArrayTableData;g.eventMap.updateTableDataWithFilter=g.updateTableDataWithFilter;g.eventMap.click=g.click;g.$on(g.cid+"_handleEvent",function(m,k,l,j){g.eventMap[k](l);if(null!=j){j.resolve()}})}],link:function(f,e,d,g){f.pageID=g.pageID;f.componentType="itable";f.init()}}}]);
uiCore.directive('iappiconholderlbar', [
    'coreService',
    'coreUtils',
    function(coreService, coreUtils) {
        return {
            restrict: 'AE',
            replace: true,
            transclude: true,
            template: '<div id="maindiv" ng-class="appiconbarStyle"><div ng-click="handleAppClick(app,$index);" ng-class="app.icclass" id="appicon" ng-repeat="app in compData.JS.appconfig" ng-click="compData.JS.clickable && handleClick(app);"><div class="app-red-notice" ng-style="app.reddotStyle">&nbsp;</div><div id="appiconimage" ng-show="app.selected && compData.JS.curve" class="ts-blue-cur"><div class="ts-blue-cur-top"></div><div class="ts-blue-cur-bottom"></div></div><img id="appiconimage" ng-class="app.iclass" width="50%" height="50%" ng-src="{{app.finalimage}}"></img><div id="appiconnameholder" ng-class="app.thclass"><div id="appiconname" ng-bind="app.name" ng-class="app.tclass"></div></div></div></div>',
            scope: {},
            require: '^pid',
            controller: [
                '$scope',
                '$element',
                '$attrs',
                '$timeout',
                function($scope, $element, $attrs) {
                    $scope.cid = $attrs.cid;
                    $scope.classid = '.' + $scope.cid;
                    $scope.eventMap = {};
                    $scope.compData = {
                        'CSS': {
                            'height': '100%',
                            'width': '100%'
                        },
                        'JS': {
                            'selectdAppData': null,
                            'selectdAppIndex': null,
                            'clickable': true,
                            'redDotImg': "url('" + top.tlbs.templatePath + "/images/reddot.png?V=1')",
                            'curve': false,
                            'appiconstyle': {
                                'CSS': {
                                    'vertical-align': 'top',
                                    'height': '2.8em',
                                    'float': 'left',
                                    'cssFloat': 'left',
                                    'width': '3.1em',
                                    'background': 'none',
                                    'position': 'relative'
                                },
                                'JS': {}
                            },
                            'appiconstyleselect': {
                                'CSS': {
                                    "background-image": "url('" + top.tlbs.templatePath + "/images/active.png?V=1')",
                                    "background-repeat": "no-repeat",
                                    "background-size": "100% 100%"
                                },
                                'JS': {}
                            },
                            'appimagestyle': {
                                'CSS': {
                                    'height': '1.7em',
                                    'left': '0.7em',
                                    'position': 'relative',
                                    'text-align': 'center',
                                    'top': '0.25em',
                                    'width': '1.7em'
                                },
                                'JS': {}
                            },
                            'appimagestyleselect': {
                                'CSS': {},
                                'JS': {}
                            },
                            'appnameholderstyle': {
                                'CSS': {

                                },
                                'JS': {

                                }
                            },
                            'appnameholderstyleselect': {
                                'CSS': {

                                },
                                'JS': {

                                }
                            },
                            'appnamestyle': {
                                'CSS': {
                                    'color': 'rgb(0, 0, 0)',
                                    'display': 'block',
                                    'font-size': '0.6em!important',
                                    'line-height': '1.5em!important',
                                    'margin-top': '0.3em!important',
                                    'max-width': '100%',
                                    'min-width': '10%',
                                    'overflow': 'hidden',
                                    'text-align': 'center',
                                    'text-overflow': 'ellipsis',
                                    'white-space': 'nowrap',
                                    'width': '5em'
                                },
                                'JS': {}
                            },
                            'appnamestyleselect': {
                                'CSS': {

                                },
                                'JS': {}
                            },
                            "cdrConfig": {
                                "uitracingcdr": {
                                    "cdrType": "uitracingcdr",
                                    "enable": true,
                                    "storeData": false
                                }
                            }
                        }
                    };
                    $scope.compData.JS.appconfig = top.tlbs.appholder || [];
                    $scope.lastClickTime = new Date();
                    $scope.init = function() {
                        coreService.registerComponentInstance($scope.cid, $scope);
                        $scope.extendComponentData(coreService.getInitProperties($scope.cid));
                        $scope.initStyle();
                        $scope.setAllAppToDefaultStyle();
                        $scope.processStyle();

                        for (var i = 0; i < $scope.compData.JS.appconfig.length; i++) {
                            if ($scope.compData.JS.appconfig[i]['selected'] && $scope.compData.JS.selectdAppIndex != appIndex) {
                                $scope.setAppToDefaultStyle(i);
                            }

                            $scope.compData.JS.appconfig[i]['reddotStyle'] = {
                                'background-image': 'url(' + $scope.compData.JS.redDotImg + ')',
                                'display': ($scope.compData.JS.appconfig[i]['reddot'] ? 'block' : 'none')
                            };
                            $scope.compData.JS.appconfig[i]['redDotSrvSet'] = false;
                        }
                    };

                    $scope.setAppSelectdToDefault = function(appIndex) {
                        for (var i = 0; i < $scope.compData.JS.appconfig.length; i++) {
                            if ($scope.compData.JS.appconfig[i]['selected'] && $scope.compData.JS.selectdAppIndex != appIndex) {
                                $scope.setAppToDefaultStyle(i);
                            }
                        }
                    };

                    $scope.setAllAppToDefaultStyle = function() {
                        for (var i = 0; i < $scope.compData.JS.appconfig.length; i++) {
                            $scope.setAppToDefaultStyle(i);
                        }
                        $scope.compData.JS.selectdAppData = null;
                        $scope.compData.JS.selectdAppIndex = null;
                    };

                    $scope.setAppToSelectedStyle = function(appIndex) {
                        $scope.compData.JS.appconfig[appIndex]['icclass'] = $scope.appiconStyleSelected;
                        $scope.compData.JS.appconfig[appIndex]['iclass'] = $scope.appimageStyleSelected;
                        $scope.compData.JS.appconfig[appIndex]['thclass'] = $scope.appTextHolderStyleSelected;
                        $scope.compData.JS.appconfig[appIndex]['tclass'] = $scope.appTextStyleSelected;
                        $scope.compData.JS.appconfig[appIndex]['finalimage'] = $scope.compData.JS.appconfig[appIndex]["clickedimage"];
                        $scope.compData.JS.appconfig[appIndex]['selected'] = true;
                    };

                    $scope.setAppToDefaultStyle = function(appIndex) {
                        $scope.compData.JS.appconfig[appIndex]['icclass'] = $scope.appiconStyle;
                        $scope.compData.JS.appconfig[appIndex]['iclass'] = $scope.appimageStyle;
                        $scope.compData.JS.appconfig[appIndex]['thclass'] = $scope.appTextHolderStyle;
                        $scope.compData.JS.appconfig[appIndex]['tclass'] = $scope.appTextStyle;
                        $scope.compData.JS.appconfig[appIndex]['finalimage'] = $scope.compData.JS.appconfig[appIndex]["defaultimage"];
                        $scope.compData.JS.appconfig[appIndex]['selected'] = false;
                    };

                    // BEGIN SCG TOOLBAR V5R5C60LG005 Defect: DTS2015091711704 K70924 18.09.2015
                    $scope.preSetRedDot = function(eventObject, deferred) {

                        var appDetail = undefined;

                        if (eventObject.appid != null) {
                            appDetail = $scope.searchAppDetails('appid', eventObject.appid);
                        } else if (eventObject.appname != null) {
                            appDetail = $scope.searchAppDetails('name', eventObject.appname);
                        }

                        if (null != appDetail) {
                            eventObject['appid'] = appDetail.appdata.appid;
                            var appIdx = appDetail.appindex;

                            coreService.fireEvent($scope.cid, 'redDotPreSet', eventObject);
                            $scope.compData.JS.appconfig[appIdx]['redDotSrvSet'] = true;
                        }


                        if (null != deferred) {
                            deferred.resolve();
                        }
                    };
                    $scope.eventMap['preSetRedDot'] = $scope.preSetRedDot;
                    // END SCG TOOLBAR V5R5C60LG005 Defect: DTS2015091711704 K70924 18.09.2015
                    //BEGIN Toolbar V5R5LG005 SCG_VGS_TB_R0097 k70924 01.09.2015 Support Red Dot feature
                    $scope.setRedDot = function(eventObject, deferred) {

                        var appDetail = null;

                        if (eventObject.appid != null) {
                            appDetail = $scope.searchAppDetails('appid', eventObject.appid);
                        } else if (eventObject.appname != null) {
                            appDetail = $scope.searchAppDetails('name', eventObject.appname);
                        }

                        if (null != appDetail) {
                            var redDotDiv = $element.children()[appDetail.appindex].children[0];
                            var styleDisp = redDotDiv.style.getPropertyValue('display');
                            eventObject['appid'] = appDetail.appdata.appid;
                            var appIdx = appDetail.appindex;

                            if (null == styleDisp || styleDisp == 'none') {
                                redDotDiv.style.setProperty('display', 'block');

                                coreService.fireEvent($scope.cid, 'redDotSet', eventObject);
                                $scope.compData.JS.appconfig[appIdx]['redDotSrvSet'] = true;
                            }
                        }

                        if (null != deferred) {
                            deferred.resolve();
                        }
                    };
                    $scope.eventMap['setRedDot'] = $scope.setRedDot;

                    $scope.clearRedDot = function(eventObject, deferred) {

                        var appDetail = null;
                        if (eventObject.appid != null) {
                            appDetail = $scope.searchAppDetails('appid', eventObject.appid);
                        } else if (eventObject.appname != null) {
                            appDetail = $scope.searchAppDetails('name', eventObject.appname);
                        }

                        if (null != appDetail) {
                            $scope.clearAppRedDot(appDetail.appindex, appDetail.appdata.appid);
                        }

                        if (null != deferred) {
                            deferred.resolve();
                        }
                    };
                    $scope.eventMap['clearRedDot'] = $scope.clearRedDot;

                    $scope.clearAppRedDot = function(index, appid) {
                        var redDotDiv = $element.children()[index].children[0];
                        var styleDisp = redDotDiv.style.getPropertyValue('display');
                        var redDotSrvSet = $scope.compData.JS.appconfig[index]['redDotSrvSet'];

                        if (styleDisp == 'block') {
                            redDotDiv.style.setProperty('display', 'none');
                            coreService.fireEvent($scope.cid, 'redDotCleared', {
                                'appid': appid
                            });
                            $scope.compData.JS.appconfig[index]['redDotSrvSet'] = false;
                        } else if (redDotSrvSet) {
                            coreService.fireEvent($scope.cid, 'redDotCleared', {
                                'appid': appid
                            });
                            $scope.compData.JS.appconfig[index]['redDotSrvSet'] = false;
                        }
                    }

                    //END Toolbar V5R5LG005 SCG_VGS_TB_R0097 k70924 01.09.2015 Support Red Dot feature

                    $scope.handleAppClick = function(appData, appIndex) {
                        var currentTime = new Date();
                        var differenceTime = currentTime.getTime() - $scope.lastClickTime.getTime();
                        if (differenceTime <= 400) {
                            return;
                        }
                        if (appData.linktype != '1') {
                            $scope.setAppSelectdToDefault(appIndex);
                            if ($scope.compData.JS.appconfig[appIndex]['selected']) {
                                coreService.fireEvent($scope.cid, 'closeapp');
                                $scope.compData.JS.appconfig[appIndex]['selected'] = false;
                                $scope.setAppToDefaultStyle(appIndex);
                                $scope.compData.JS.selectdAppData = null;
                                $scope.compData.JS.selectdAppIndex = null;
                            } else {
                                var eventData = {
                                    "state": "0",
                                    "pageid": appData.pageid,
                                    "reload": '1'
                                };
                                coreService.fireEvent($scope.cid,'clearbackimage');
                                coreService.fireEvent($scope.cid, 'openapp', eventData);
                                $scope.setAppToSelectedStyle(appIndex);
                                $scope.compData.JS.selectdAppData = appData;
                                $scope.compData.JS.selectdAppIndex = appIndex;

                                $scope.clearAppRedDot(appIndex, appData.appid);
                            }
                        } else {
                        	var openurl = appData.url.split("|");
                            var httpurl = "";
                        	for(var i = 0; i < openurl.length;i++)
                        	{
                        		if(openurl[i].indexOf("http://")>=0){
                        			httpurl = openurl[i];
                        			continue;
                        		}
                        		window.open(openurl[i]);
                        	}
                        	window.open(httpurl);
                        }
                        $scope.handleCDR(appData);
                        $scope.lastClickTime = currentTime;
                    };

                    $scope.handleCDR = function(appData) {
                        if (coreUtils.cdrUtils.canWriteUITracingCDR($scope.compData.JS.cdrConfig)) {
                            $scope.compData.JS['cdrData'] = {};
                            $scope.compData.JS.cdrData = {
                                'pageId': $scope.pageID,
                                'componentId': appData.appid
                            };
                            coreUtils.cdrService($scope.compData.JS.cdrConfig.uitracingcdr, $scope.compData.JS.cdrData);
                        }
                    };



                    $scope.selectApp = function(eventObject, deferred) {
                        $scope.setAllAppToDefaultStyle();
                        var appDetail = null;
                        if (eventObject.appid != null) {
                            appDetail = $scope.searchAppDetails('appid', eventObject.appid);
                        } else if (eventObject.appname != null) {
                            appDetail = $scope.searchAppDetails('name', eventObject.appname);
                        } else if (eventObject.pageId != null) {
                            appDetail = $scope.searchAppDetails('pageid', eventObject.pageId);
                        }
                        if (null != appDetail) {
                            $scope.setAppToSelectedStyle(appDetail.appindex);
                            $scope.compData.JS.selectdAppData = appDetail.appdata;
                            $scope.compData.JS.selectdAppIndex = appDetail.appindex;
                        }
                        if (null != deferred) {
                            deferred.resolve();
                        }
                    };

                    $scope.searchAppDetails = function(searchKey, searchValue) {
                        for (var i = 0; i < $scope.compData.JS.appconfig.length; i++) {
                            var foundValue = $scope.compData.JS.appconfig[i][searchKey];
                            if (null == foundValue) {
                                return null;
                            } else if (foundValue === searchValue) {
                                return {
                                    'appindex': i,
                                    'appdata': $scope.compData.JS.appconfig[i]
                                };
                            }
                        }
                        return null;
                    };

                    $scope.processStyle = function() {
                        var mainStyle = JSON.stringify($scope.compData.CSS);
                        mainStyle = $scope.formatStyleData(mainStyle);
                        coreService.commonServiceRef.appendStyle($scope.classid, '', mainStyle);
                        mainStyle = JSON.stringify($scope.compData.JS.appiconstyle.CSS);
                        mainStyle = $scope.formatStyleData(mainStyle);
                        coreService.commonServiceRef.appendStyle('.' + $scope.appiconStyle, '', mainStyle);
                        mainStyle = JSON.stringify($scope.compData.JS.appiconstyleselect.CSS);
                        mainStyle = $scope.formatStyleData(mainStyle);
                        coreService.commonServiceRef.appendStyle('.' + $scope.appiconStyle, '.sel', mainStyle);
                        mainStyle = JSON.stringify($scope.compData.JS.appimagestyle.CSS);
                        mainStyle = $scope.formatStyleData(mainStyle);
                        coreService.commonServiceRef.appendStyle('.' + $scope.appimageStyle, '', mainStyle);
                        mainStyle = JSON.stringify($scope.compData.JS.appimagestyleselect.CSS);
                        mainStyle = $scope.formatStyleData(mainStyle);
                        coreService.commonServiceRef.appendStyle('.' + $scope.appimageStyle, '.sel', mainStyle);
                        mainStyle = JSON.stringify($scope.compData.JS.appnamestyle.CSS);
                        mainStyle = $scope.formatStyleData(mainStyle);
                        coreService.commonServiceRef.appendStyle('.' + $scope.appTextStyle, '', mainStyle);
                        mainStyle = JSON.stringify($scope.compData.JS.appnamestyleselect.CSS);
                        mainStyle = $scope.formatStyleData(mainStyle);
                        coreService.commonServiceRef.appendStyle('.' + $scope.appTextStyle, '.sel', mainStyle);
                        mainStyle = JSON.stringify($scope.compData.JS.appnameholderstyle.CSS);
                        mainStyle = $scope.formatStyleData(mainStyle);
                        coreService.commonServiceRef.appendStyle('.' + $scope.appTextHolderStyle, '', mainStyle);
                        mainStyle = JSON.stringify($scope.compData.JS.appnameholderstyleselect.CSS);
                        mainStyle = $scope.formatStyleData(mainStyle);
                        coreService.commonServiceRef.appendStyle('.' + $scope.appTextHolderStyle, '.sel', mainStyle);

                    };

                    $scope.initStyle = function() {
                        $scope.appiconbarStyle = $scope.cid;
                        $scope.appiconStyle = $scope.cid + "-aicos";
                        $scope.appiconStyleSelected = $scope.cid + "-aicos sel";
                        $scope.appimageStyle = $scope.cid + "-aimgs";
                        $scope.appimageStyleSelected = $scope.cid + "-aimgs sel";
                        $scope.appTextHolderStyle = $scope.cid + "-atxths";
                        $scope.appTextHolderStyleSelected = $scope.cid + "-atxths sel";
                        $scope.appTextStyle = $scope.cid + "-atxts";
                        $scope.appTextStyleSelected = $scope.cid + "-atxts sel";
                    };
                    $scope.formatStyleData = function(styleData) {
                        styleData = styleData.replace(/","/g, ';').replace(/":"/g, ':').replace(/\\/g, '').replace(/{"/, '{').replace(/"}/, '}');
                        return styleData;
                    };

                    $scope.extendComponentData = function(componetData) {
                        $scope.compData = coreUtils.extendDeep($scope.compData, componetData);
                    };

                    //add begin by tWX330131 for  DTS2017011706623
                    //获取之前的trafficquery请求状态
                    $scope.getStatus = function(data) {
                    	if(data){
                    		$scope.compData.JS.Status = data.status;
                    	}
                    };
                    
                    $scope.requestQuery = function(data){
                    	//$scope.compData.JS.requestQuery  可以在配置文件中修改是否点击流量查询APP更新流量概况：true--点击更新、false--点击不更新
                    	if( data.pageid == "itraffic" && $scope.compData.JS.requestQuery && $scope.compData.JS.Status == 0){
                   		 	coreService.fireEvent($scope.cid, 'query');
                    	}
                    };
                    //add end by tWX330131
                    
                    $scope.eventMap['getStatus'] = $scope.getStatus;
                    $scope.eventMap['requestQuery'] = $scope.requestQuery;
                    $scope.eventMap['selectApp'] = $scope.selectApp;
                    $scope.eventMap['setAllAppToDefaultStyle'] = $scope.setAllAppToDefaultStyle;
                    $scope.$on($scope.cid + '_handleEvent', function(eventObj, event, inputData, deferred) {
                        $scope.eventMap[event](inputData, deferred);
                    });
                }
            ],
            link: function(scope, element, attrs, ctrl) {
                scope.pageID = ctrl.pageID;
                scope.componentType = 'iappiconholderlbar';
                scope.init();
            }
        };
    }
]);
uiCore.directive('inputbox', function () {
	return {
		restrict : 'EA',
		replace : true,
		scope : {},
		require : '^pid',
		template : '<div class=\'ui-com-textarea-feedback\' ng-click=\'click();$event.stopPropagation();\'>' + '<textarea autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" ng-style=\'style\' class=\'textarea-input\' placeholder={{compData.JS.tips}} ng-blur=\'blur();\' ng-focus=\'focus();\'  ng-model=\'compData.JS.content\' ng-trim=\'false\'></textarea>' +'<div ng-show=\'compData.JS.isShowTips\' ng-bind="compData.JS.info" ng-style="compData.JS.infoStyle"></div>'+ '<div class=\'textarea-notice\' ng-show=\'compData.JS.isShowNotice\'><b class=\'textarea-num\' ng-style="counterStyle">{{compData.JS.maxLength-compData.JS.content.length}}</b><span class=\'textarea-text\'>{{compData.JS.unit}}</span></div>' + '</div>',
		controller : [
			'$scope',
			'$element',
			'$attrs',
			'coreService',
			'coreUtils',
			'$timeout',
			function ($scope, $element, $attrs, coreService, coreUtils, $timeout) {
				$scope.eventMap = {};
				$scope.compData = {};
				$scope.$on($attrs['cid'] + '_handleEvent', function (event, cevent, args, deferred) {
					if ($scope.eventMap[cevent]) {
						var result = $scope.eventMap[cevent](args);
						if (null != deferred && result) {
							deferred.resolve();
						}
					}
				});
				$scope.click = function () {
					setStyle({}); //coreService.fireEvent($element.attr('cid'), $attrs['event'] || 'btnclick', $attrs['eventdata']);
				};
				$scope.blur = function () {
					
					//Fall - back logic to handle placeholder not supported.
                    if ($scope.isPlaceholderSupported()) {
                    	$scope.compData.JS.tips = $scope.tips;
					}
                    else {
                    	var inputbox = $element[0].querySelector('textarea');
                    	if(inputbox.value.trim() == ''||inputbox.value.trim()==$scope.tips) {
                    		$timeout(function() {            				
                    			inputbox.value = $scope.tips;
        					});
                    	}
                    }
					//  top.document.querySelector(".ilinebarholder ").style.bottom="0";
					// top.window.scroll(0, top.document.body.scrollHeight);
				};
			 
				$scope.focus = function () {
					$scope.compData.JS.isShowTips = false;
                    if ($scope.isPlaceholderSupported()) {
                    	$scope.compData.JS.tips = '';
					}
                    else {
                    	var inputbox = $element[0].querySelector('textarea');
                    	
                    	if(inputbox.value == $scope.tips) {
                    		inputbox.value = '';
                    	}
                    }
				};
				$scope.$watch('compData.JS.content', function (newv, old) {

					if (newv.length > $scope.compData.JS.maxLength) {

						$scope.compData.JS.content = $scope.content;
					} else {
						$scope.content = $scope.compData.JS.content;

					}
				});
				$scope.init = function () {
					var defaultProp = {
						CSS : {},
						JS : {
							maxLength : 512,
							minLength : 1,
							tips : 'Enter your opinion about Toolbar.',
							unit : 'words',
							isShowNotice : false,
							isShowTips : false,
							infoStyle : {
								'color' : '#FF0000',
								"text-align" : "left",
								"padding-left" : "1.8em",
								"background" : "url('" + top.tlbs.templatePath + "/images/info_bg.png') no-repeat",
								"background-position" : "0.5em 0.1em",
								"background-size" : "0.9em 0.9em",
								"font-size" : "0.8em",
								"margin-top" : "0.6em"
								
							},
							invalideStyle : {
								'border-color' : 'red'
							},
							defaultStyle : {
								'border-color' : ''
							},
							counterStyle : {
								'color' : '#46a3ff',
							}
						}
					},
					
					properties = coreService.getInitProperties($attrs['cid']) || {},
					jsProp = properties.JS || {},
					cssProp = properties.CSS || {},
					jsData = coreUtils.String2JSON($attrs['jsdata']),
					cssData = coreUtils.String2JSON($attrs['cssdata']);
					$scope.compData.JS = coreUtils.extendDeep(defaultProp.JS, jsProp, jsData);
					$scope.compData.CSS = coreUtils.extendDeep(defaultProp.CSS, cssProp, cssData);
					$element.css($scope.compData.CSS);
					$scope.tips = $scope.compData.JS.tips;
					$scope.compData.JS.content = '';
					$scope.counterStyle = $scope.compData.JS.counterStyle;
					//resolve when scrol feedback,the parent page alse scroll
					(function () {
						var inputbox = $element[0].querySelector('textarea');
						var _lastYPos = 0;
						var _currentYPos = 0;
						var moveFlag = false;
						var touchFlag = false;
						var start = function (e) {
						    touchFlag = true;
							_lastYPos = e.touches ? e.touches[0].pageY : e.pageY;
						};
						var move = function (e) {
							_currentYPos = e.touches ? e.touches[0].pageY : e.pageY;
							if (Math.abs(_currentYPos - _lastYPos) > 3 || moveFlag ||!touchFlag) {
								moveFlag = true;
								e.stopPropagation();
								e.preventDefault();
							}
							_lastYPos = _currentYPos;
						};
						var end = function (e) {
							if (moveFlag) {
								e.stopPropagation();
								e.preventDefault();
							}
							_lastYPos = 0;
						    _currentYPos = 0;
							touchFlag = false;
							moveFlag = false;
						};
						inputbox.addEventListener('touchstart', start);
						inputbox.addEventListener('touchmove', move);
						inputbox.addEventListener('touchend', end);

					})();
					if (top.tlbs.languageID == "ar"){
						defaultProp.JS.tips=defaultProp.JS.tips_ar;
					}
				};
				$scope.isPlaceholderSupported = function() {
					var test = document.createElement('textarea');
					
                    if ('placeholder' in test) {
                    	return true;
					}
                    else {
                    	return false;
                    }
				};
				
				$scope.getContent = function () {
					return $scope.compData.JS.content;
				};
				$scope.clearContent = function () {
					setStyle($scope.compData.JS.defaultStyle);
					$scope.compData.JS.content = '';
					var inputbox = $element[0].querySelector('textarea');
					    inputbox.value = '';
                	
					if (!$scope.isPlaceholderSupported()) {
						$scope.blur();
					}
					
					return true;
				};
				var setStyle = function (style) {
					$scope.style = style;
					/*$timeout(function() {
					$scope.$apply();
					});*/
				};
				var validate = function () {
					if ($scope.compData.JS.content.trim().length < $scope.compData.JS.minLength) {	
//						setStyle($scope.compData.JS.invalideStyle);
						$scope.compData.JS.isShowTips = true;
						$scope.compData.JS.content = $scope.compData.JS.content.trim();
						$scope.blur();
						return false;
					}
					return true;
				};
				var setDefaultText = function (style) {
					$scope.compData.JS.content = $scope.compData.JS.defaulttext;
				};
				var changeTextValuea = function (args) {
					if ($scope.compData.JS.dataMapping) {
						$scope.compData.JS.defaulttext = coreUtils.transfer(args, $scope.compData.JS.dataMapping);
						if ($scope.compData.JS.defaulttext == undefined)
							$scope.compData.JS.defaulttext = "";
					} else {
						$scope.compData.JS.defaulttext = args.defaulttext;
					}
					$scope.compData.JS.content = $scope.compData.JS.defaulttext;
				};
				
				// add begin by tWX330131.DTS2016121608528.
				var checkinput= function () {
					var inputbox = $element[0].querySelector('textarea');
					var msg;
					msg = inputbox.value.replace(/%/g,"%25");
					coreService.fireEvent($element.attr('cid'),"sendfeedback",{"feedback":msg});
				};
				// add end by tWX330131. 
				
				$scope.eventMap['checkinput'] = checkinput;
				$scope.eventMap['changeTextValuea'] = changeTextValuea;
				$scope.eventMap['setDefaultText'] = setDefaultText;
				$scope.eventMap['clear'] = $scope.clearContent;
				$scope.eventMap['validate'] = validate;
				coreService.registerComponentInstance($element.attr('cid'), $scope);
			}
		],
		link : function ($scope, $element, $attrs, ctl) {
			$scope.pageID = ctl.pageID;
			$scope.componentType = 'inputbox';
			$scope.init();
		}
	};
});
/**
 * directive:richtext
 * usage:<richtext>package name</richtext>
 */
uiCore.directive('richtext', function () {
	return {
		restrict : 'EA',
		replace : true,
		require : '^pid',
		scope : {
			param : '=param'
		},
		template : '<div class=\'ui-com-link\'  ng-click=\'click();\'></div>',
		controller : [
			'$scope',
			'$element',
			'$attrs',
			'coreService',
			'coreUtils',
			function ($scope, $element, $attrs, coreService, coreUtils) {
				var isOpera = /preto/i.test(navigator.userAgent) || /opera/i.test(navigator.userAgent);
				var IEadjust = function () {
					var docM = document.documentMode;
					var ua = navigator.userAgent;
					return docM < 10 ? true : false;
				}
				$scope.eventMap = {};
				$scope.compData = {
					'CSS' : {},
					'JS' : {
						'linkSupport' : false,
						'supportIE' : false,
						'addCSS' : false
					}
				};
				$scope.compData.defaultRange = {
					"defaultRange" : {
						"c" : "#8A0808"
					},
					"range1" : {
						"c" : "#6DB312",
						"e" : "1",
						"h" : "50",
						"l" : "0"
					},
					"range2" : {
						"c" : "#FFA500",
						"e" : "1",
						"h" : "80",
						"l" : "51"
					},
					"range3" : {
						"c" : "#FF0000",
						"e" : "1",
						"h" : "95",
						"l" : "81"
					},
					"range4" : {
						"c" : "#8A0808",
						"e" : "1",
						"h" : "100",
						"l" : "96"
					}
				};

				$scope.$on($attrs['cid'] + '_handleEvent', function (event, cevent, args, deferred) {
					if ($scope.eventMap[cevent]) {
						$scope.eventMap[cevent](args);
						if (null != deferred) {
							deferred.resolve();
						}
					}
				});
				var feedbackTextValue = function (args){
					if(args.respparam && args.respparam.success) {
						$element[0].innerHTML = $scope.jsProp.successtext;
					}else {
						$element[0].innerHTML = $scope.jsProp.messagetext;
					}
				};
				
				var changeTextValue = function (args) {
					if ($scope.jsProp.dataMapping) {
						$scope.jsProp.text = coreUtils.transfer(args, $scope.jsProp.dataMapping);
						//show traffic detail actualdata value and formateddata value
						if($attrs['cid'] == $scope.jsProp.actualDataCid && $scope.jsProp.text && $scope.jsProp.text.length >0){
							$scope.jsProp.text = $scope.jsProp.text[0].actualdata;
						}
						if($attrs['cid'] == $scope.jsProp.formatedDataCid && $scope.jsProp.text && $scope.jsProp.text.length >0){
							$scope.jsProp.text = $scope.jsProp.text[0].formateddata;
						}
						if ($scope.jsProp.text == undefined || $scope.jsProp.text == ""){
							$scope.jsProp.text = "--";
						}
						if($attrs['cid'] == $scope.jsProp.updatedTimeCid && $scope.jsProp.text && $scope.jsProp.text.length >0){
							$scope.jsProp.text = "【" + $scope.jsProp.text + "】";
							if ($scope.jsProp.text == undefined || $scope.jsProp.text == ""){
								$scope.jsProp.text = "【--】";
							}
						}
					} else {
						$scope.jsProp.text = args.text;
					}
					$element[0].innerHTML = $scope.jsProp.text;
				};
				var changeTextValueSlider = function (args) {
					if ($scope.jsProp.dataMapping && args.data) {
						args = args.data;
						$scope.jsProp.text = coreUtils.transfer(args, $scope.jsProp.dataMapping);
						if ($scope.jsProp.text == undefined)
							$scope.jsProp.text = "";
					}
					$element[0].innerHTML = $scope.jsProp.text;
				};
				var changeTextValueRaw = function (args) {
					$scope.jsProp.text = args.text;
					$element[0].innerHTML = $scope.jsProp.text;
				};
				var changeTextValueByconfig = function () {
					$element[0].innerHTML = $scope.jsProp.text;
				};
				$scope.checkforError = function (respData) {
					var responsedata1 = coreUtils.transfer(respData, $scope.compData.JS.errorMsgRespPath);
					if (responsedata1 == undefined || responsedata1.length == 0) {
						angular.element($element[0]).css({
							'display' : 'block'
						});
					} else {
						angular.element($element[0]).css({
							'display' : 'none'
						});

					}

					return;
				};
				var fillTextTemplate = function (args) {
					if ($scope.jsProp.dataMapping) {
						var param = [];
						param[0]=coreUtils.transfer(args,$scope.jsProp.dataMapping);
						var template = $scope.jsProp.template;
						$scope.jsProp.text = template.replace(/\{[0-9]\}/g, function (s, i, str) {
								var index = parseInt(s.substring(s.indexOf('{') + 1, s.indexOf('}')));
								return param[index];
							});
						$element[0].innerHTML = $scope.jsProp.text;
					}
				};
				var fillTextTemplateName = function (args) {
					if ($scope.jsProp.dataMapping) {
						var param = [args.text];
						var template = $scope.jsProp.template;
						$scope.jsProp.text = template.replace(/\{[0-9]\}/g, function (s, i, str) {
								var index = parseInt(s.substring(s.indexOf('{') + 1, s.indexOf('}')));
								return param[index];
							});
						$element[0].innerHTML = $scope.jsProp.text;
					}
				};
				var showText = function (args) {
					angular.element($element[0]).css({
						'display' : 'block'
					});
				};
				var hideText = function (args) {
					angular.element($element[0]).css({
						'display' : 'none'
					});
				};
				var resetvscroll = function (l) {
					var wrapperDiv = angular.element($element[0].parentNode);
					if (wrapperDiv && wrapperDiv[0] && wrapperDiv[0].className == 'ui-com-vscroll-wrapper') {
						if (isOpera) {
							wrapperDiv.css('-o-transform', 'translate(0,0)');
							wrapperDiv.css('transform', 'translate(0,0)');
						} else {
							wrapperDiv.css('-webkit-transform', 'translate3d(0,0,0)');
							wrapperDiv.css('-moz-transform', 'translate3d(0,0,0)');

							wrapperDiv.css('-ms-transform', 'translate3d(0,0,0)');
							wrapperDiv.css('transform', 'translate3d(0,0,0)');
						}
					}
				};
				$scope.eventMap["text.update2"] = changeTextValueByconfig;
				$scope.eventMap["resetvscroll"] = resetvscroll;
				$scope.eventMap['text.update'] = changeTextValue;
				$scope.eventMap['text.feedbackText'] = feedbackTextValue;
				$scope.eventMap['text.updateslider'] = changeTextValueSlider;
				$scope.eventMap['text.update1'] = changeTextValueRaw;
				$scope.eventMap['template.update'] = fillTextTemplate;
				$scope.eventMap['template.update1'] = fillTextTemplateName;
				$scope.eventMap['checkforError'] = $scope.checkforError;
				$scope.eventMap['showText'] = showText;
				$scope.eventMap['hideText'] = hideText;
				$scope.init = function () {
					var properties = coreService.getInitProperties($attrs['cid']) || {},
					jsProp = properties.JS || {},
					cssProp = properties.CSS || {};
					$scope.jsProp = jsProp;
					$scope.cssProp = cssProp;
					$scope.compData['JS'] = $scope.jsProp;
					$scope.compData['CSS'] = $scope.cssProp;
					$element.css($scope.cssProp);
					if ($scope.compData.JS.supportIE) {
						if ($scope.compData.JS.addCSS && IEadjust()) {
							angular.element($element[0]).css({
								'display' : 'inline'
							});
						}
					}
					if ($scope.jsProp.text) {
						$element[0].innerHTML = $scope.jsProp.text
					};
					$scope.$watch($scope.param, function (newValue) {
						if ($scope.param) {
							$scope.update();
						}
					});
				};

				$scope.getPercentageColor = function () {
					var valueSet = undefined;
					for (p in $scope.styleSet) {

						var dataSet = p.split("_");

						if (dataSet.length > 0) {

							if (parseInt(dataSet[0]) <= $scope.jsProp.percent && $scope.jsProp.percent <= parseInt(dataSet[1])) {
								return $scope.styleSet[p];
							}
						}
					}
					return $scope.styleSet.defaultset;
				};

				$scope.convertRangeConfig = function () {
					$scope.styleSet = {};
					for (var i = 1; i <= 4; i++) {
						$scope.convertSingleRangeConfig('range' + i);
					}
					$scope.styleSet['defaultset'] = {
						'activecolor' : $scope.jsProp.defaultRange.c,
					};
				};
				$scope.convertSingleRangeConfig = function (singleRange) {
					var singleRangeConfig = $scope.jsProp[singleRange];
					if (null != singleRangeConfig.e && singleRangeConfig.e == 1) {
						$scope.styleSet[singleRangeConfig.l + '_' + singleRangeConfig.h] = {
							'activecolor' : singleRangeConfig.c,
						};
					}
				};

				$scope.update = function () {
					if (typeof $scope.param == 'string') {
						$scope.param = coreUtils.String2JSON($scope.param);
					}
					$scope.jsProp = coreUtils.extendDeep($scope.compData.defaultRange, $scope.jsProp, $scope.param.JS || {});
					$scope.cssProp = coreUtils.extendDeep($scope.cssProp, $scope.param.CSS || {});
					if ($scope.jsProp.percent || $scope.jsProp.percent == 0) {
						$scope.convertRangeConfig();
						var colorSet = $scope.jsProp.colorSet || {
							'#6DB312' : [
								0,
								60
							],
							'#FF7F00' : [
								61,
								90
							],
							'#FF1111' : [
								91,
								100
							],
							'#FF1111' : [
								101,
								200
							]
						},
						//color = getPercentageColor(parseInt($scope.jsProp.percent), colorSet);
						color = $scope.getPercentageColor().activecolor;
						if (color) {
							$scope.cssProp.color = color;
						}
					}
					$element.css($scope.cssProp);
//					if($attrs['cid'] == "textvalue"){
//						$scope.jsProp.text = "--";
//					}
					$element[0].innerHTML = $scope.jsProp.text
				};
				$scope.click = function (e) {
					if (null != $scope.compData.JS.clickable && $scope.compData.JS.clickable && !$scope.compData.JS.linkSupport) {
						coreService.fireEvent($element.attr('cid'), $attrs['event'] || 'click', $attrs['eventdata']);
					} else if ($scope.compData.JS.linkSupport) {
						coreService.commonServiceRef.dynamicService(null, {
							"serviceType" : "urlservice",
							"openurl" : $attrs['openurl']
						});
					}
				};
				coreService.registerComponentInstance($element.attr('cid'), $scope);
			}
		],
		link : function ($scope, $element, $attrs, ctl) {
			$scope.pageID = ctl.pageID;
			$scope.componentType = 'richtext';
			$scope.init();
		}
	};
});
//usage:<button></button>
uiCore.directive('tbbutton', function() {
    return {
        restrict: 'EA',
        replace: true,
        require: '^pid',
        template: '<div class=\'tb-ui-com-btn {{::compData.JS.customclass}}\' ng-click="bclicked();$event.preventDefault();$event.stopPropagation();"><div class=\'tb-ui-com-btn-desc\' ng-style="compData.JS.textStyle">{{param.JS.name || jsProp.name}}{{countDown}}</div></div>',
        scope: {
            param: '=param',
            eventdata: '=eventdata'
        },
        controller: [
            '$scope',
            '$element',
            '$attrs',
            'coreService',
            'coreUtils',
            'Const',
            function($scope, $element, $attrs, coreService, coreUtils, Const) {
                $scope.eventMap = {};
                $scope.compData = {
                    'CSS': {

                    },
                    'JS': {
                    	"effecttimeValue" : "0",
						'customclass':'',
                        'eventMapping': '',
                        'timerConfig': {
                            'timerValue': '0',
                            'timerText': '',
                        },
                        'disableCss': {

                        },
						'disablePermanent':false,
                        'textStyle': {

                        },
                        'cdrConfig': {
                            'uitracingcdr': {
                                'cdrType': 'uitracingcdr',
                                'enable': true,
                                'storeData': false
                            }
                        },
                        'serviceData': false
                    }
                };
                $scope.countDown = "";
                $scope.$on($attrs['cid'] + '_handleEvent', function(event, cevent, args, deferred) {
                    if ($scope.eventMap[cevent]) {
                        $scope.eventMap[cevent](args);
                        if (null != deferred) {
                            deferred.resolve();
                        }
                    }
                });
                $scope.init = function() {
                    coreService.registerComponentInstance($element.attr('cid'), $scope);
                    var properties = coreService.getInitProperties($attrs['cid']) || {},
                        jsProp = properties.JS || {},
                        cssProp = properties.CSS || {},
                        jsData = coreUtils.String2JSON($attrs['jsdata']),
                        cssData = coreUtils.String2JSON($attrs['cssdata']);
                    $scope.jsProp = coreUtils.extendDeep($scope.compData.JS, jsProp, jsData);
                    $scope.cssProp = coreUtils.extendDeep($scope.compData.CSS, cssProp, cssData);
                    $scope.disableCSS = coreUtils.extendDeep(angular.copy($scope.cssProp), $scope.compData.JS.disableCss);
                    coreUtils.extendDeep($scope.compData.CSS, $scope.cssProp);
                    coreUtils.extendDeep($scope.compData.JS, $scope.jsProp);
                    //$scope.compData['JS'] = $scope.jsProp;
                    //$scope.compData['CSS'] = $scope.cssProp;
                    $scope.name = $scope.jsProp.name || '';
                    coreUtils.extendDeep($scope.compData.JS.textStyle, {
                        'fontSize': $scope.compData.JS.fontSize || $scope.compData.JS.textStyle.fontSize
                    });
                    $scope.applyStyle();
                    $scope.$watch($scope.param, function() {
                        if ($scope.param) {
                            $scope.update();
                        }
                    });
                    $scope.$watch($scope.eventdata, function() {});
                };
                $scope.applyStyle = function() {
                    if (!$scope.jsProp.disable) {
                        $element.css($scope.cssProp);
                    } else {
                        $element.css($scope.disableCSS);
                    }
                };
                $scope.bclicked = function() {
                    if ($attrs['cid']) {
                        var eventData = coreUtils.extendDeep({}, $scope.eventdata || $scope.edata);
                        //add begin by tWX330131 ,package subscribe need param add 'effecttime',deal issue base of toolbar
                        if($attrs['cid'] == $scope.compData.JS.subscribeCid){
                        	eventData['effecttime'] = { 
                        			"value" : $scope.compData.JS.effecttimeValue 	
                        	}
                    	}
                        //add end by tWX330131
                        if (null != $scope.compData.JS.serviceData && $scope.compData.JS.serviceData) {
                            eventData = $scope.loadServiceData(eventData);
                        }
                        if (!$scope.jsProp.disable && $scope.compData.JS.timerConfig.timerValue == 0) {
                            coreService.fireEvent($element.attr('cid'), $attrs['event'] || 'btnclick', eventData);
                        } else if (!$scope.jsProp.disable && $scope.compData.JS.timerConfig.timerValue > 0) {
                            coreService.fireEvent($element.attr('cid'), $attrs['event'] || 'btnclick', eventData);
                            $scope.diableBtn();
                            $scope.startTimer();
                        }
                        if (coreUtils.cdrUtils.canWriteUITracingCDR($scope.compData.JS.cdrConfig)) {
                            $scope.compData.JS['cdrData'] = {};
                            $scope.compData.JS.cdrData = {
                                'pageId': $scope.pageID,
                                'componentId': $element.attr('cid')
                            };
                            coreUtils.cdrService($scope.compData.JS.cdrConfig.uitracingcdr, $scope.compData.JS.cdrData);
                        }
                    } else if (null != $attrs['cdr'] && "1" == $attrs['cdr']) {
                        var cdrConfig = {
                            'cdrType': 'uitracingcdr',
                            'enable': true,
                            'storeData': $element.attr('storedata') == 'true'
                        };
                        $scope.compData.JS['cdrData'] = {};
                        $scope.compData.JS.cdrData = {
                            'pageId': $scope.pageID,
                            'componentId': $element.attr('ccid') || '',
                            'iseComp': $element.attr('isecomp') || '0',
                        };
                        coreUtils.cdrService(cdrConfig, $scope.compData.JS.cdrData);
                        var componentId = $element.attr('ccid') || '';
                        if ('msgdlg.close' == componentId || 'msgdlg.cancel' == componentId) {
                            top.tlbs.notificationCdrData = null;
                        }
                    }
                };
                $scope.loadServiceData = function(eventData) {
                    if (typeof eventData == 'string') {
                        eventData = coreUtils.String2JSON(eventData);
                    }
                    if (null != top.tlbs.cdrData) {
                        eventData['epageId'] = top.tlbs.cdrData.pageId || '';
                    }
                    return eventData;
                };
                $scope.startTimer = function() {
                    $scope.countDown = $scope.compData.JS.timerConfig.timerValue;
                    $scope.countDownText = $scope.jsProp.name;
                    $scope.jsProp.name = $scope.compData.JS.timerConfig.timerText;
                    var countDownTimer = setInterval(function() {
                        if ($scope.countDown <= 0) {
                            clearInterval(countDownTimer);
                            $scope.countDown = "";
                            $scope.jsProp.name = $scope.countDownText;
                            $scope.enable();
                            $scope.$apply();
                            return;
                        }
                        $scope.countDown--;
                        $scope.$apply();
                    }, 1000);
                }
                $scope.updateEventData = function(eventData) {
                    $scope.edata = coreUtils.extendDeep({}, eventData);
                };
                $scope.updateEvent = function(event) {
                    if ($scope.compData.JS.eventMapping.length > 0) {
                        $attrs['event'] = coreUtils.transfer(event, $scope.compData.JS.eventMapping);
                    } else {
                        $attrs['event'] = event.name;
                    }
                };
                $scope.diableBtn = function(event) {
					$scope.jsProp.disable = true;
                    $scope.applyStyle();
                    return true;
                };
				$scope.diableBtnPermanent = function (event) {
					$scope.jsProp.disablePermanent = true;
					$scope.jsProp.disable = true;
					$scope.applyStyle();
					return true;
				};
				$scope.enableBtnPermanent = function (event) {
					$scope.jsProp.disablePermanent = false;
					$scope.jsProp.disable = false;
					$scope.applyStyle();
					return true;
				};
                $scope.enable = function(event) {
					if($scope.jsProp.disablePermanent)
						return;
                    $scope.jsProp.disable = false;
                    $scope.applyStyle();
                };
                $scope.update = function() {
                    if (typeof $scope.param == 'string') {
                        $scope.param = coreUtils.String2JSON($scope.param);
                    }
                    $scope.jsProp = coreUtils.extendDeep($scope.jsProp, $scope.param.JS || {});
                    $scope.cssProp = coreUtils.extendDeep($scope.cssProp, $scope.param.CSS || {});
                    $scope.disableCSS = coreUtils.extendDeep(angular.copy($scope.cssProp), $scope.compData.JS.disableCss);
                    $scope.applyStyle();
                };
                var changeTextValue = function(args) {
                    if ($scope.jsProp.dataMapping) {
                        $scope.jsProp.text = coreUtils.transfer(args, $scope.jsProp.dataMapping);
                    } else {
                        $scope.jsProp.text = args.text;
                    }
                    $scope.jsProp.name = $scope.jsProp.text;
                };
                $scope.eventMap['text.update'] = changeTextValue;
                $scope.eventMap['eventData.update'] = $scope.updateEventData;
                $scope.eventMap['event.update'] = $scope.updateEvent;
                $scope.eventMap['btn.disable'] = $scope.diableBtn;
				$scope.eventMap['btn.diableBtnPer'] = $scope.diableBtnPermanent;
				$scope.eventMap['btn.enableBtnPer'] = $scope.enableBtnPermanent;
                $scope.eventMap['btn.enable'] = $scope.enable;
            }
        ],
        link: function($scope, $element, $attrs, ctl) {
            $scope.pageID = ctl.pageID;
            $scope.componentType = 'tbbutton';
            $scope.init();
        }
    };
});
uiCore.directive("iconditioncheck",["coreService","coreUtils","$timeout",function(c,a,b){return{restrict:"E",replace:true,template:"<div></div>",scope:{},require:"^pid",controller:["$scope","$element","$attrs","$interval",function(f,e,d,j){f.cid=d.cid;f.eventMap={};f.compData={CSS:{display:"none",width:"0em",height:"0em"},JS:{autochecktimer:"1",datapath:"",successdata:"",errordata:"",inprogressdata:"",eventdatakey:"",eventdatapath:""}};var h;var g=null;var i=0;f.extendComponentData=function(k){f.compData=a.extendDeep(f.compData,k)};f.init=function(){c.registerComponentInstance(f.cid,f);f.extendComponentData(c.getInitProperties(f.cid));e.css(f.compData.CSS)};f.startTask=function(l,k){if(angular.isDefined(h)){return}c.fireEvent(f.cid,"taskstart");h=j(function(){i=i+g.guiRefreshTime*1000;if(i<=g.timeoutVal*60000){c.fireEvent(f.cid,"inprogress",g)}else{f.endTask();c.fireEvent(f.cid,"checkerror")}},g.guiRefreshTime*1000);if(null!=k){k.resolve()}};f.endTask=function(l,k){g=null;if(angular.isDefined(h)){c.fireEvent(f.cid,"taskend");j.cancel(h);h=undefined}if(null!=k){k.resolve()}};f.validateData=function(n,k){if(null!=f.compData.JS.datapath&&f.compData.JS.datapath.length>0){var m=a.transfer(n,f.compData.JS.datapath);if(f.compData.JS.successdata===m){f.endTask();c.fireEvent(f.cid,"checksuccess")}else{if(f.compData.JS.errordata===m){f.endTask();c.fireEvent(f.cid,"checkerror")}else{if(f.compData.JS.inprogressdata===m){if(null!=f.compData.JS.eventdatapath&&null==g){var l=a.transfer(n,f.compData.JS.eventdatapath);g=l}f.startTask()}else{if(m===undefined){f.endTask();c.fireEvent(f.cid,"checkempty")}else{c.fireEvent(f.cid,"checkerror")}}}}}if(null!=k){k.resolve()}};f.validateDataPrivacy=function(n,k){if(null!=f.compData.JS.datapath&&f.compData.JS.datapath.length>0){var m=top.tlbs.locationprivacy;if(parseInt(f.compData.JS.successdata)===m){f.endTask();c.fireEvent(f.cid,"checksuccess")}else{if(parseInt(f.compData.JS.errordata)===m){f.endTask();c.fireEvent(f.cid,"checkerror")}else{if(f.compData.JS.inprogressdata===m){if(null!=f.compData.JS.eventdatapath&&null==g){var l=a.transfer(f.compData.JS.eventdatapath);g=l}f.startTask()}else{if(m===undefined){f.endTask();c.fireEvent(f.cid,"checkempty")}else{c.fireEvent(f.cid,"checkerror")}}}}}if(null!=k){k.resolve()}};f.updateprivacystatus=function(k){top.tlbs.locationprivacy=parseInt(k.privacystatus)};f.eventMap.startTask=f.startTask;f.eventMap.endTask=f.endTask;f.eventMap.validateData=f.validateData;f.eventMap.validateDataPrivacy=f.validateDataPrivacy;f.eventMap.updateprivacystatus=f.updateprivacystatus;f.$on(f.cid+"_handleEvent",function(n,l,m,k){f.eventMap[l](m,k)})}],link:function(f,e,d,g){f.pageID=g.pageID;f.componentType="iconditioncheck";f.init()}}}]);
uiCore.directive('ring', function() {
    return {
        restrict: 'EA',
        replace: true,
        require: '^pid',
        template: '<div class=\'ring\' ng-click=\'compData.JS.clickable?handleClick():clickDisable()\'>' + '<div class=\'ring-back\'></div>' + '<div class=\'ring-top\'><div class=\'percent\'>{{compData.JS.percent}}</div></div>' + '</div>',
        scope: {
            param: '=param'
        },
        controller: [
            '$scope',
            '$element',
            '$attrs',
            '$timeout',
            'coreService',
            'coreUtils',
            function($scope, $element, $attrs, $timeout, coreService, coreUtils) {
                $scope.eventMap = {};
                $scope.compData = {
                    'CSS': {},
                    'JS': {
                        'enabled': true,
                        'clickable': false,
                        'dragable': false,
                        'valueShown': true,
                        'autoSide': false,
                        'clickByRange': false,
                        'suffix': '%',
                        'transparentDelay': 10,
                        'refreshInterval': 600,
                        'opacity': 3,
                        'circleImgUrl': 'url("' + top.tlbs.templatePath + '/images/ring_circle.png")',
                        'rangeCount': 4,
                        'range1': {
                            e: 1,
                            l: 0,
                            h: 50,
                            c: '#0B610B',
                            u: 'app:c1',
                            iu: undefined
                        },
                        'range2': {
                            e: 1,
                            l: 51,
                            h: 80,
                            c: '#FFA500',
                            u: 'app:c1',
                            iu: undefined
                        },
                        'range3': {
                            e: 1,
                            l: 81,
                            h: 95,
                            c: '#FF0000',
                            u: 'app:c2',
                            iu: undefined
                        },
                        'range4': {
                            e: 1,
                            l: 96,
                            h: 100,
                            c: '#8A0808',
                            u: 'app:c2',
                            iu: '/images/ring_fuel.png'
                        }
                    }
                };
                $scope.extendComponentData = function(componetData) {
                    $scope.compData = coreUtils.extendDeep($scope.compData, componetData);
                    $timeout(function() {
                        $scope.$apply();
                    });
                };
                $scope.init = function() {
                    $scope.cid = $element.attr('cid');
                    $scope.currentPercent = 0;
                    $scope.ringColor = '#01DF01';
                    coreService.registerComponentInstance($scope.cid, $scope);
                    $scope.extendComponentData(coreService.getInitProperties($scope.cid));
                    coreService.fireEvent($element.attr('cid'), $attrs['event'] || 'ringInit', $attrs['eventdata']);
                    $scope.$watch($scope.param, function(newValue) {
                        if ($scope.param) {
                            $scope.update();
                        }
                    });
                    
                   var backDiv = $element.children()[0];
                   $scope.ringArc = new pieChart(0, 90, "none", "#c9c9c9");
                   backDiv.appendChild($scope.ringArc.init());
                   
                   /*window.addEventListener("resize", function() {
                	   var newsize = parseInt(angular.element($element[0].querySelector('.ring-back')).css('height'));
                	   
                	   if(!isNaN(newsize)) {
                		   $scope.ringArc.setSize(newsize-4);
                	   }
                   });*/
                };
                $scope.update = function() {
                    if (typeof $scope.param == 'string') {
                        $scope.param = coreUtils.String2JSON($scope.param);
                    }
                    $scope.setPercent($scope.param.percent, false);
                };
                $scope.$on($attrs['cid'] + '_handleEvent', function(event, cevent, args, deferred) {
                    if ($scope.eventMap[cevent]) {
                        $scope.eventMap[cevent](args);
                        if (null != deferred) {
                            deferred.resolve();
                        }
                    }
                });
                $scope.handleClick = function() {
                    if (false == $scope.compData.clickable) {
                        return;
                    }
                    if ($scope.compData.clickByRange) {} else {
                        coreService.fireEvent($element.attr('cid'), $attrs['event'] || 'ringClick', $attrs['eventdata']);
                    }
                };
                $scope.clickDisable = function() {};
                /* This function should be done by dragable container
                $scope.moveToSide = function() {
                    var contentWidth = top.window.innerWidth;
                    var ringWidth = parseInt($element.css('height')),
                        ringLeft = parseInt($element.css('left'));
                    if ((ringWidth + ringLeft / 2) > contentWidth / 2) {
                        //TODO: Animate side move
                        $element.css('left', contentWidth - ringWidth);
                        $element.css('right', 0);
                    } else {
                        $element.css('left', 0);
                    }
                };
                 */
                
                $scope.setPercent = function(percent, animate) {
                    if (typeof percent == 'string') {
                        percent = parseInt(percent);
                    }
                    percent = parseInt(percent.toFixed(0));
                    $scope.currentPercent = percent;
                    $scope.ringColor = '#01DF01';
                    //Defaut color to show
                    var imgUrl = undefined;
                    var found = false;
                    var colorDiv = $element.children()[0],
                        circleDiv = $element.children()[1],
                        percentDiv = $element.children()[1].children[0];
                    //Set ring image first
                    circleDiv.style.setProperty('background-image', $scope.compData.JS.circleImgUrl);
                    var ranges = [
                        $scope.compData.JS.range1,
                        $scope.compData.JS.range2,
                        $scope.compData.JS.range3,
                        $scope.compData.JS.range4
                    ];
                    for (var i = 0; i < ranges.length; i++) {
                        var range = ranges[i];
                        if (range.e == 1 && range.l <= percent && range.h >= percent) {
                        	 $scope.ringColor = range.c;
                            imgUrl = range.iu;
                            found = true;
                            break;
                        }
                    }
                    //If range not found then find closest range settings for the percentage value on lower or upper bounds 
                    if (false == found) {
                        var lowRangeIdx = -1,
                            highRangeIdx = -1,
                            min = 10000000,
                            max = 0;
                        for (var i = 0; i < ranges.length; i++) {
                            var range = ranges[i];
                            if (range.e == 1) {
                                if (range.l < min) {
                                    min = range.l;
                                    lowRangeIdx = i;
                                }
                                if (range.h > max) {
                                    max = range.h;
                                    highRangeIdx = i;
                                }
                            }
                        }
                        if (percent < min && lowRangeIdx != -1) {
                        	 $scope.ringColor = ranges[lowRangeIdx].c;
                            imgUrl = ranges[lowRangeIdx].iu;
                        } else if (percent > max && highRangeIdx != -1) {
                        	 $scope.ringColor = ranges[highRangeIdx].c;
                            imgUrl = ranges[highRangeIdx].iu;
                        }
                    }
                    //Set color and background image:
                    //colorDiv.style.setProperty('background-color', ringColor);
                    $scope.ringArc.setPercentColor(percent,  $scope.ringColor, "#c9c9c9");
                    
                    if (imgUrl) {
                        $scope.compData.JS.percent = '';
                        if (imgUrl.indexOf('http://') != -1) {
                            percentDiv.style.setProperty('background-image', 'url(\'' + imgUrl + '\')');
                        } else {
                            percentDiv.style.setProperty('background-image', 'url(\'' + top.tlbs.templatePath + imgUrl + '\')');
                        }
                        percentDiv.style.setProperty('top', '0%');
                    } else {
                        $scope.compData.JS.percent = $scope.currentPercent + $scope.compData.JS.suffix;
                        percentDiv.style.setProperty('background-image', '');
                        percentDiv.style.setProperty('top', '38%');
                    }
                };
                $scope.animate = function(args) {
                    $scope.ringArc.setPercentColor($scope.currentPercent, $scope.ringColor, "#c9c9c9");
                };
                
                var pieChart = function(percentage, size, color, bgcolor) {
                    this.percentage = percentage;
                    this.size = size;
                    this.color = color;
                    this.bgcolor = bgcolor;
                    this.chart = undefined;
                    this.back = undefined;
                    this.path = undefined;
                    //this.front = undefined;
                    };
                    
                    pieChart.prototype.animate = function(chart, startangle, currentAngle, stopAngle) {
                    	var lastLoop = false;
                    	
                        if(currentAngle >= stopAngle && currentAngle - 0.2 < stopAngle) {
                        	currentAngle = stopAngle;
                        	lastLoop = true;
                        }
                        else if(currentAngle >= stopAngle) {
                        	return;
                        }
                        
                        if(currentAngle == 0 || currentAngle == -0.00015 || currentAngle == 0.00015) {
                        	chart.back.setAttributeNS(null, "fill", "#c9c9c9");
                        }
                        else {
                        	chart.back.setAttributeNS(null, "fill", chart.color);
                        }
                        
                    var x1 = (chart.size / 2) + (chart.size / 2) * Math.sin(startangle);
                    var y1 = (chart.size / 2) - (chart.size / 2) * Math.cos(startangle);
                    var x2 = (chart.size / 2) - (chart.size / 2) * Math.sin(currentAngle);
                    var y2 = (chart.size / 2) - (chart.size / 2) * Math.cos(currentAngle);
                    var big = 1;
                       
                    if (currentAngle - startangle > Math.PI) {
                        big = 0;
                    }
                    var d = "M " + (chart.size / 2) + "," + (chart.size / 2) +  // Start at circle center
                        " L " + x1 + "," + y1 +     // Draw line to (x1,y1)
                        " A " + (chart.size / 2) + "," + (chart.size / 2) +       // Draw an arc of radius r
                        " 0 " + big + " 1 " +       // Arc details...
                        x2 + "," + y2 +             // Arc goes to to (x2,y2)
                        " Z";                       // Close path back to (cx,cy)
                        chart.path.setAttribute("d", d); // Set this path 
                        
                        if(!lastLoop) {
                        	setTimeout(function(){
                                pieChart.prototype.animate(chart, startangle, currentAngle + 0.2, stopAngle);
                    
                        	},25);
                        }
                    };
                    
                    pieChart.prototype.resize = function() {
                    	var unit = (Math.PI *2) / 100;    
                        var startangle = 0;
                        var perc = this.percentage;
                        
                        if(perc > 100) {
                        	perc = 100;
                        }
                        var stopAngle = perc * unit - 0.00015;
                        
	                    var x1 = (this.size / 2) + (this.size / 2) * Math.sin(startangle);
	                    var y1 = (this.size / 2) - (this.size / 2) * Math.cos(startangle);
	                    var x2 = (this.size / 2) - (this.size / 2) * Math.sin(stopAngle);
	                    var y2 = (this.size / 2) - (this.size / 2) * Math.cos(stopAngle);
	                    var big = 1;
	                       
	                    if (stopAngle - startangle > Math.PI) {
	                        big = 0;
	                    }
	                    var d = "M " + (this.size / 2) + "," + (this.size / 2) +  // Start at circle center
	                        " L " + x1 + "," + y1 +     // Draw line to (x1,y1)
	                        " A " + (this.size / 2) + "," + (this.size / 2) +       // Draw an arc of radius r
	                        " 0 " + big + " 1 " +       // Arc details...
	                        x2 + "," + y2 +             // Arc goes to to (x2,y2)
	                        " Z";                       // Close path back to (cx,cy)
	                    this.path.setAttribute("d", d); // Set this path 
                    };
                    
                    pieChart.prototype.init = function(){
                        var svgns = "http://www.w3.org/2000/svg";
                        this.chart = document.createElementNS(svgns, "svg:svg");
                        this.chart.setAttribute("width", "3.6em");
                        this.chart.setAttribute("height", "3.6em");
                        this.chart.setAttribute("viewBox", "0 0 " + this.size + " " + this.size);
                        
                        // Background circle
                        this.back = document.createElementNS(svgns, "circle");
                        this.back.setAttributeNS(null, "cx", this.size / 2);
                        this.back.setAttributeNS(null, "cy", this.size / 2);
                        this.back.setAttributeNS(null, "r",  this.size / 2);
                        this.chart.appendChild(this.back);
                        
                        // primary wedge
                        this.path = document.createElementNS(svgns, "path");
                        var unit = (Math.PI *2) / 100;    
                        var startangle = 0;
                        var perc = this.percentage;
                        
                        if(perc > 100) {
                        	perc = 100;
                        }
                        
                        var endangle = perc * unit - 0.00015;
                        this.path.setAttribute("fill", '#c9c9c9');
                        this.back.setAttributeNS(null, "fill", '#c9c9c9');
                        this.chart.appendChild(this.path); // Add wedge to chart
                        
                        // foreground circle
                        /*this.front = document.createElementNS(svgns, "circle");
                        this.front.setAttributeNS(null, "cx", (this.size / 2));
                        this.front.setAttributeNS(null, "cy", (this.size / 2));
                        this.front.setAttributeNS(null, "r",  (this.size * 0.2)); //about 34% as big as back circle 
                        this.front.setAttributeNS(null, "fill", "#dee0e2");
                        this.chart.appendChild(this.front);*/
                    
                        this.animate(this, startangle, 0, endangle);
                    
                        return this.chart;
                    }
                    
                    pieChart.prototype.setPercentColor = function(percent, color, bgcolor) {
                        var unit = (Math.PI *2) / 100;    
                        var startangle = 0;
                        this.color = color;
                        this.bgcolor = bgcolor;
                        this.percentage = percent;
                        
                        if(percent > 100) {
                        	percent = 100;
                        }
                        
                        var endangle = percent * unit - 0.00015;
                        this.path.setAttribute("fill", bgcolor);

                        this.animate(this, startangle, 0, endangle);
                };
                
                pieChart.prototype.setSize = function(newSize) {
                	/*this.size = newSize;
                	
                	this.chart.setAttribute("width", this.size);
                    this.chart.setAttribute("height", this.size);
                    this.chart.setAttribute("viewBox", "0 0 " + this.size + " " + this.size);
                    
                    this.back.setAttributeNS(null, "cx", this.size / 2);
                    this.back.setAttributeNS(null, "cy", this.size / 2);
                    this.back.setAttributeNS(null, "r",  this.size / 2);
                    
                    this.resize();*/
                }
                    
                $scope.eventMap['setpercent'] = $scope.setPercent;
                $scope.eventMap['animate'] = $scope.animate;
            }
        ],
        link: function($scope, $element, $attrs, ctl) {
            $scope.pageID = ctl.pageID;
            $scope.componentType = 'ring';
            $scope.init();
        }
    };
});
uiCore.directive('imageContainer', function() {
    return {
        restrict: 'EA',
        replace: true,
        transclude: true,
        scope: {},
        require: '^pid',
        template: '<div class="ui-com-image-container"><div class="ui_com_imageContainer_innerDiv"></div></div>',
        controller: [
            '$scope',
            '$element',
            '$attrs',
            'coreService',
            function($scope, $element, $attrs, coreService) {
                $scope.cid = $attrs.cid;
                $scope.eventMap = {};
                $scope.compData = {};
                $scope.compData.isActive = false;
                var _touchstart = 'ontouchstart' in document ? 'touchstart' : 'mousedown',
                    _touchmove = 'ontouchmove' in document ? 'touchmove' : 'mousemove',
                    _touchend = 'ontouchend' in document ? 'touchend' : 'mouseup';
                $element.bind(_touchstart, function(e) {
                    $scope.compData.isActive = !$scope.compData.isActive;
                    if ($scope.compData.isActive) {
                        $scope.applyActiveStyles();
                        coreService.fireEvent($scope.cid, 'expand');
                    } else {
                        $scope.applyDefaultStyles();
                        coreService.fireEvent($scope.cid, 'collapse');
                    }
                    e.stopPropagation();
                    e.preventDefault();
                });
                $scope.$on($scope.cid + '_handleEvent', function(eventObj, event, args, deferred) {
                    $scope.eventMap[event](args);
                    if (null != deferred) {
                        deferred.resolve();
                    }
                });
                $scope.extendDeep = function extendDeep(dst) {
                    angular.forEach(arguments, function(obj) {
                        if (obj !== dst) {
                            angular.forEach(obj, function(value, key) {
                                if (dst[key] && dst[key].constructor && dst[key].constructor === Object) {
                                    extendDeep(dst[key], value);
                                } else {
                                    dst[key] = value;
                                }
                            });
                        }
                    });
                    return dst;
                };
                $scope.init = function() {
                    coreService.registerComponentInstance($element.attr('cid'), $scope);
                    var properties = coreService.getInitProperties($attrs['cid']) || {},
                        jsProp = properties.JS || {},
                        cssProp = properties.CSS || {},
                        jsData = $attrs['jsdata'] || {},
                        cssData = $attrs['cssdata'] || {};
                    $scope.jsProp = $scope.extendDeep(jsData, jsProp);
                    $scope.cssProp = $scope.extendDeep(cssData, cssProp);
                };
                $scope.applyElementCss = function() {
                	if($scope.jsProp.imageurl){
                		$scope.image_url = $scope.jsProp.imageurl;
                        $scope.activeImageurl = $scope.jsProp.activeImageurl;
                        var nameEle = $element[0].querySelector('.ui_com_imageContainer_innerDiv');
                        angular.element(nameEle).css($scope.image_url);
                        $element.css($scope.cssProp);
                	}
                };
                $scope.applyActiveStyles = function() {
                    var nameEle = $element[0].querySelector('.ui_com_imageContainer_innerDiv');
                    angular.element(nameEle).css($scope.activeImageurl);
                };
                $scope.applyDefaultStyles = function() {
                    var nameEle = $element[0].querySelector('.ui_com_imageContainer_innerDiv');
                    angular.element(nameEle).css($scope.image_url);
                };
                $scope.updateFeedbackimgurl = function(param) {
                	var nameEle = $element[0].querySelector('.ui_com_imageContainer_innerDiv');
                	if(param.respparam && param.respparam.success) {
                		$scope.imagesuccessurl = $scope.jsProp.state.success;
                        angular.element(nameEle).css($scope.imagesuccessurl);
                	}else{
                		
                		$scope.imagefailurl = $scope.jsProp.state.message;
                        angular.element(nameEle).css($scope.imagefailurl);
                	}
                };
                $scope.eventMap['updateFeedbackimgurl'] = $scope.updateFeedbackimgurl;
            }
        ],
        link: function($scope, $element, $attributes, $controller, $transcludeFn) {
            $scope.pageID = $controller.pageID;
            $scope.componentType = 'imageContainer';
            $scope.init();
            $scope.applyElementCss();
        }
    };
});
uiCore.directive("ilogo",["coreService","coreUtils","$timeout",function(c,a,b){return{restrict:"E",replace:true,template:'<div ng-click="compData.JS.clickable && handleClick();$event.stopPropagation();"><div ng-style="compData.JS.redDot" class="logo-red-notice">&nbsp;</div></div>',scope:{param:"=param"},require:"^pid",controller:["$scope","$element","$attrs","$interval",function(f,e,d,g){f.currenetState="collapse";f.cid=d.cid;f.timerInterval=null;f.lockState=false;if(top.tlbs.logoRedDotCount){f.redCount=top.tlbs.logoRedDotCount}else{f.redCount=0}f.eventMap={};f.compData={CSS:{width:"3.55em",height:"5em",position:"absolute",right:"0","background-repeat":"no-repeat","background-size":"cover","z-index":"5000"},JS:{clickable:false,redDotImg:"url('"+top.tlbs.templatePath+"/images/reddot.png?V=1')",animation:false,timerstate:false,autostatechangetimeout:5,pageStack:[],redDot:{},stateconfig:{state:0,state0:{},state1:{}},cdrConfig:{uitracingcdr:{cdrType:"uitracingcdr",enable:true,storeData:false},uidisplaycdr:{cdrType:"uidisplaycdr",enable:true,storeData:false}}}};f.changeState=function(i,h){if(null!=i&&null!=i.cstate){f.compData.JS.timerstate=false;g.cancel(f.timerInterval);if(f.compData.JS.stateconfig.state!=i.cstate){f.compData.JS.stateconfig.state=i.cstate;f.applyStyle();f.$evalAsync(function(){if(null!=h){if(f.compData.JS.animation){if(top.tlbs.isTransitionSupported){e.on(top.tlbs.transitionendEvent,function(j){h.resolve()})}else{h.resolve()}}else{h.resolve()}}})}else{if(null!=h){h.resolve()}}}};f.changeExtraState=function(i,h){if(null!=i&&null!=i.cstate){if(f.compData.JS.stateconfig.state!=i.cstate){f.compData.JS.stateconfig.state=i.cstate;f.applyStyle()}else{if(null!=h){h.resolve()}}}};f.handleClick=function(){if(!f.lockState){if(f.compData.JS.timerstate){c.fireEvent(f.cid,"click0",null);f.lockState=true}else{c.fireEvent(f.cid,"click"+f.compData.JS.stateconfig.state,null)}if(f.compData.JS.stateconfig.state==0){f.lockState=true}a.recordTracingCdr(f.pageID,f.cid,f.compData.JS.cdrConfig,{iseComp:"1"},{})}};f.extendComponentData=function(h){f.compData=a.extendDeep(f.compData,h)};f.eventMap.changeState=f.changeState;f.eventMap.changeExtraState=f.changeExtraState;f.$on(f.cid+"_handleEvent",function(k,i,j,h){f.eventMap[i](j,h)});f.init=function(){c.registerComponentInstance(f.cid,f);f.extendComponentData(c.getInitProperties(f.cid));var i=e.children()[0];i.style.setProperty("background-image","url("+f.compData.JS.redDotImg+")");if(top.tlbs.logoRedDotSet){i.style.setProperty("display","block")}else{i.style.setProperty("display","none")}var h=function(){var j=top.tlbs.dockPosition||false;if(j){c.fireEvent(f.cid,"moveTop")}else{c.fireEvent(f.cid,"moveBottom")}};b(h,0);b(function(){c.fireEvent(f.cid,"init",null)},800);if(f.compData.JS.timerstate){f.compData.JS.timerstate=false;f.startAutoStateChangeTimer(null,null)}f.applyStyle();a.recordTracingCdr(f.pageID,1,0,f.compData.JS.cdrConfig)};f.startAutoStateChangeTimer=function(i,h){if(!f.compData.JS.timerstate){f.compData.JS.timerstate=true;f.timerInterval=g(function(){c.fireEvent(f.cid,"autostatechange",null)},f.compData.JS.autostatechangetimeout*1000)}if(null!=h){h.resolve()}};f.eventMap.startAutoStateChangeTimer=f.startAutoStateChangeTimer;f.setRedDot=function(j,h){var k=e.children()[0];var i=k.style.getPropertyValue("display");f.redCount=f.redCount+1;if(null==i||i=="none"){k.style.setProperty("display","block");c.fireEvent(f.cid,"redDotSet")}if(null!=h){h.resolve()}};f.eventMap.setRedDot=f.setRedDot;f.clearRedDot=function(j,h){var k=e.children()[0];var i=k.style.getPropertyValue("display");if(i=="block"){f.redCount=f.redCount-1;if(f.redCount<1){k.style.setProperty("display","none");c.fireEvent(f.cid,"redDotCleared")}}if(null!=h){h.resolve()}};f.eventMap.clearRedDot=f.clearRedDot;f.unlockLogoClick=function(i,h){f.lockState=false;if(null!=h){h.resolve()}};f.lockLogoClick=function(i,h){f.lockState=true;if(null!=h){h.resolve()}};f.eventMap.lockLogoClick=f.lockLogoClick;f.eventMap.unlockLogoClick=f.unlockLogoClick;f.applyStyle=function(){if(null!=f.compData.JS.stateconfig["state"+f.compData.JS.stateconfig.state]){a.extendDeep(f.compData.CSS,f.compData.JS.stateconfig["state"+f.compData.JS.stateconfig.state])}e.css(f.compData.CSS)}}],link:function(f,e,d,g){f.pageID=g.pageID;f.componentType="ilogo";f.init()}}}]);
uiCore.directive('lbarholder', [
    'coreService',
    'coreUtils',
    '$timeout',
    function(coreService, coreUtils, $timeout) {
        return {
            restrict: 'AE',
            replace: false,
            templateUrl: function(elem, attrs) {
                return attrs.templateurl;
            },
            scope: {
                param: '=param'
            },
            require: '^pid',
            controller: [
                '$scope',
                '$element',
                '$attrs',
                function($scope, $element, $attrs) {
                    $scope.currenetState = 'collapse';
                    $scope.cid = $attrs.cid;
                    $scope.eventMap = {};
                    $scope.compData = {
                        'CSS': {
                            'width': '100%',
                            'height': '3.25em',
                            'position': 'fixed',
                            'bottom': '0',
                            'right': '0',
                            'display': 'block'
                        },
                        'JS': {
                            'clickable': false,
                            'animation': false,
                            'pageStack': [],
                            'stateconfig': {
                                'state': 2,
                                'state0': {
                                    'display': 'none'
                                },
                                'state1': {
                                    'width': '0%'
                                },
                                'state2': {
                                    'width': '100%'
                                }
                            }
                        }
                    };
                    $scope.testStyle = function() {
                        if (0 == $scope.compData.JS.stateconfig.state) {
                            return coreUtils.extendDeep($scope.compData.CSS, $scope.compData.JS.stateconfig.state0);
                        } else if (1 == $scope.compData.JS.stateconfig.state) {
                            return coreUtils.extendDeep($scope.compData.CSS, $scope.compData.JS.stateconfig.state1);
                        } else {
                            return coreUtils.extendDeep($scope.compData.CSS, $scope.compData.JS.stateconfig.state2);
                        }
                    };
                    $scope.refreshStyle = function() {
                        $element.css(coreUtils.extendDeep($scope.compData.CSS, $scope.compData.JS.stateconfig['state' + $scope.compData.JS.stateconfig.state]));
                    };
                    $scope.changeState = function(stateObject, deferred) {
                        if (null != stateObject && null != stateObject.cstate) {
                            if ($scope.compData.JS.stateconfig.state != stateObject.cstate) {
                                $scope.compData.JS.stateconfig.state = stateObject.cstate;
                                $timeout(function() {
                                    $scope.refreshStyle();
                                    if (null != deferred) {
                                        if ($scope.compData.JS.animation) {
                                            //var _transitionEnd = /webkit/i.test(navigator.userAgent) ? 'webkitTransitionEnd' : 'transitionend';
                                        	/*在实际环境中会出现top.tlbs.transitionendEvent为undefined的情况，这里先做下屏蔽*/
                                        	if(!top.tlbs.transitionendEvent){
                                        		top.tlbs.transitionendEvent = 'transitionend';
                                            	if (window.ontransitionend === undefined && window.onwebkittransitionend !== undefined) {
                                            		top.tlbs.transitionendEvent = 'webkitTransitionEnd transitionend';
                                            	};
                                        	}
                                        	/*add by lwx342527*/
                                        	
                                        	$element.one(top.tlbs.transitionendEvent, function(e) {
                                                deferred.resolve();
                                            });
                                        } else {
                                            deferred.resolve();
                                        }
                                    }
                                });
                            } else if (null != deferred) {
                                deferred.resolve();
                            }
                        }
                    };
                    $scope.changeExtraState = function(stateObject, deferred) {
                        if (null != stateObject && null != stateObject.cstate) {
                            $scope.compData.CSS = coreUtils.extendDeep($scope.compData.CSS, $scope.compData.JS.stateconfig['state' + stateObject.cstate]);
                            $scope.refreshStyle();
                        }
                    };
                    $scope.handleClick = function() {
                        coreService.fireEvent($scope.cid, 'click' + $scope.compData.JS.stateconfig.state);
                    };
                    $scope.clickDisable = function() {};
                    $scope.extendComponentData = function(componetData) {
                        $scope.compData = coreUtils.extendDeep($scope.compData, componetData);
                    };
                    $scope.eventMap['changeState'] = $scope.changeState;
                    $scope.eventMap['changeExtraState'] = $scope.changeExtraState;
                    $scope.$on($scope.cid + '_handleEvent', function(eventObj, event, inputData, deferred) {
                        $scope.eventMap[event](inputData, deferred);
                    });
                    $scope.init = function() {
                        coreService.registerComponentInstance($scope.cid, $scope);
                        $scope.extendComponentData(coreService.getInitProperties($scope.cid));
                        var dockPosition = top.tlbs.dockPosition || false;
                        if (dockPosition) {
                            coreUtils.extendDeep($scope.compData.CSS, {
                                'bottom': 'initial',
                                'display': 'block',
                                'top': '0'
                            });
                        } else {
                            coreUtils.extendDeep($scope.compData.CSS, {
                                'bottom': '0',
                                'display': 'block',
                                'top': 'initial'
                            });
                        }
                        $scope.refreshStyle();
                    };
                }
            ],
            link: function(scope, element, attrs, ctrl) {
                scope.pageID = ctrl.pageID;
                scope.init();
            }
        };
    }
]);
uiCore.directive("horizontalContainer",["$timeout",function(a){return{restrict:"EA",transclude:true,replace:true,template:'<div class="ui-com-horizontalContainer" ng-transclude></div>',require:"^pid",scope:{param:"=param"},controller:["$scope","$element","$attrs","coreService","coreUtils",function(g,f,d,h,c){g.cid=d.cid;g.eventMap={};g.compData={};var b=function(){var j=document.documentMode;var k=navigator.userAgent;return j<10?true:false};f.bind("click",function(j){j.stopPropagation();j.preventDefault()});g.extendDeep=function i(j){angular.forEach(arguments,function(k){if(k!==j){angular.forEach(k,function(m,l){if(j[l]&&j[l].constructor&&j[l].constructor===Object){i(j[l],m)}else{j[l]=m}})}});return j};g.init=function(){h.registerComponentInstance(f.attr("cid"),g);if(typeof g.param=="string"){g.param=c.String2JSON(g.param)}var k=h.getInitProperties(d.cid)||{},n=k.JS||{},l=k.CSS||{},m=c.String2JSON(d.jsdata),j=c.String2JSON(d.cssdata);g.jsProp=c.extendDeep(n,m);g.cssProp=c.extendDeep(l,j);if(d.ieadjust==1&&b()){f.css("display","inline")}if(g.param){g.update()}if(g.jsProp.type){g.type=g.jsProp.type;g.currentStyle=g.jsProp[g.jsProp.type]}if(!g.currentStyle){g.type="fixed";g.currentStyle={extendable:"false",modifyChild:"true",position:"relative",width:"130px",height:"100px"}}};g.update=function(){if(typeof g.param=="string"){g.param=c.String2JSON(g.param)}g.jsProp=c.extendDeep(g.jsProp,g.param.JS||{});g.cssProp=c.extendDeep(g.cssProp,g.param.CSS||{})};g.applyElementCss=function(){f.css(g.cssProp);f.css(g.currentStyle)};g.expand=function(l,k,j){if(g.jsProp.expand&&g.jsProp.expand.width){f.css(g.jsProp.expand)}else{f.css("width",g.mainDivWidth)}if(null!=j){if(top.tlbs.isTransitionSupported){f.one(top.tlbs.transitionendEvent,function(m){m.stopPropagation();j.resolve()})}else{e.stopPropagation();j.resolve()}}};g.collapse=function(l,k,j){f.css("width",0);if(null!=j){if(top.tlbs.isTransitionSupported){f.one(top.tlbs.transitionendEvent,function(m){m.stopPropagation();j.resolve()})}else{e.stopPropagation();j.resolve()}}};g.eventMap.expand=g.expand;g.eventMap.collapse=g.collapse;g.$on(g.cid+"_handleEvent",function(m,l,k,j){g.eventMap[l](m,k,j);if(null!=j&&g.currentStyle.isAnimation=="false"){j.resolve()}});g.verifyChildren=function(){var l=f[0].children;var k=null;var j=null;angular.forEach(l,function(n,m){k=angular.element(n);j=k.css("position");if(j=="fixed"||j=="absolute"){k.css("position","relative")}})};g.extendableComponent=function(){var l=f[0].children;g.mainDivWidth=0;g.mainDivHeight=0;var j=0;var k=null;angular.forEach(l,function(n,m){j=0;k=top.window.getComputedStyle(l[m],null);g.mainDivWidth+=parseInt(l[m].offsetWidth)+parseInt(k.marginLeft)+parseInt(k.marginRight);j+=parseInt(l[m].offsetHeight)+parseInt(k.marginTop)+parseInt(k.marginBottom);if(g.mainDivHeight<=j){g.mainDivHeight=j}});g.mainDivWidth+="px";g.mainDivHeight+="px";f.css({width:g.mainDivWidth+"px",height:g.mainDivHeight+"px"})}}],link:function(f,d,c,b){f.pageID=b.pageID;f.componentType="horizontalContainer";f.init();f.applyElementCss();f.mainDivWidth=d.css("width");if(f.currentStyle.modifyChild=="true"){f.verifyChildren()}if(f.currentStyle.extendable=="true"){f.extendableComponent()}}}}]);
uiCore.directive("ipageholder",["coreService","coreUtils","$timeout",function(c,a,b){return{restrict:"AE",replace:true,transclude:true,template:'<div ng-click="compData.JS.clickable && handleClick();$event.stopPropagation();" {{param}}"></div>',scope:{param:"=param"},require:"^pid",controller:["$scope","$element","$attrs","$compile","$templateCache",function(g,f,e,h,d){g.cid=e.cid;g.eventMap={};g.compData={CSS:{},JS:{clickable:false,animation:false,clickevent:"",stateconfig:{state:0,state0:{},state1:{}}}};g.getTemplate=function(){var j=d.get(e.templateurl);f.html(j);h(f.contents())(g)};g.extendComponentData=function(j){g.compData=a.extendDeep(g.compData,j)};g.init=function(){c.registerComponentInstance(g.cid,g);g.extendComponentData(c.getInitProperties(g.cid));g.getTemplate();g.applyStyle()};g.handleClick=function(){c.fireEvent(g.cid,(g.compData.JS.clickevent||"")+"click"+g.compData.JS.stateconfig.state)};var i=(function(){var m=0,y=top.document.body,t=top.window,v=1,o=navigator.userAgent,q=(/huawei/ig.test(o)||/HONOR/ig.test(o))&&!(/G716-L070/ig.test(o)),s=/.bing.com\/$/.test(top.window.location.href)||/.bing.com$/.test(top.window.location.href),r=0,x="",u="auto",w="",k="",j="100%",n=function(){if(q&&!s){v=0;m=y.scrollTop;r=t.getComputedStyle(y,null)["marginTop"];x=t.getComputedStyle(y,null)["position"];u=t.getComputedStyle(y,null)["overFlow"]||"auto";w=t.getComputedStyle(y,null)["top"];k=t.getComputedStyle(y,null)["left"];j=t.getComputedStyle(y,null)["width"]||"auto";y.style.position="fixed";y.style.top="0px";y.style.left="0px";y.style.overflow="hidden";y.style.width="100%";y.style.marginTop="-"+top.window.pageYOffset+"px"}},p=function(z){r=z},l=function(){if(q&&!s){if(v==0){y.style.position=x;y.style.marginTop=r;y.style.overflow=u;y.style.top=w;y.style.left=k;y.style.width=j;top.window.scrollTo(0,m);v=1}}};return{set:n,clear:l,setMarginTop:p}})();g.changeState=function(k,j){var l=false;if(k.cstate==0&&g.compData.JS.stateconfig.state==1){i.clear()}else{if(k.cstate==1&&g.compData.JS.stateconfig.state==0){l=true}}if(null!=k&&null!=k.cstate){if(g.compData.JS.stateconfig.state!=k.cstate){g.compData.JS.stateconfig.state=k.cstate;g.applyStyle();g.$evalAsync(function(){if(null!=j){if(g.compData.JS.animation){f.on(top.tlbs.transitionendEvent,function(m){j.resolve()})}else{j.resolve()}if(l){i.set()}}})}else{if(null!=j){j.resolve()}}}};g.changeExtraState=function(k,j){if(null!=k&&null!=k.cstate){g.compData.CSS=a.extendDeep(g.compData.CSS,g.compData.JS.stateconfig["state"+k.cstate]);g.applyStyle()}};g.eventMap.changeState=g.changeState;g.eventMap.changeExtraState=g.changeExtraState;g.$on(g.cid+"_handleEvent",function(m,k,l,j){g.eventMap[k](l,j)});g.$watch(g.param,function(j){if(g.param){g.compData=g.param;g.applyStyle()}});g.applyStyle=function(){if(null!=g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]){a.extendDeep(g.compData.CSS,g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state])}f.css(g.compData.CSS)}}],link:function(f,e,d,g){f.pageID=g.pageID;f.componentType="ipageholder";f.init()}}}]);
/*
 *trigger the follow event
 *msgdlg.close',msgdlg.leftBtnclick,msgdlg.rightBtnclick msgdlg.subscribeBtnclick,msgdlg.linkBtnclick
 *receive the follow event
 *hide,show
 */
uiCore.directive('msgdlg', function() {
    return {
        restrict: 'E',
        replace: true,
        transclude: true,
        require: '^pid',
        scope: {},
        template: '<div class="ui-com-lbar-msgdlg" style="display:none;" ng-style="jsProp.show" event="msgdlg.click" ng-show="jsProp.isShowDlg">' + '<div class="lheader" ng-style="jsProp.headerStyle" ng-show="jsProp.isShowHeader"><div class="msgdlg-header">{{jsProp.headerInfo}}</div>' + '<div class="lclose" ng-show="jsProp.isShowClosBtn" ng-style="jsProp.closeStyle"><tbbutton event="msgdlg.close" param="jsProp.closeBtn" cdr="1" storedata="false" isecomp="0" ccid="msgdlg.close"></tbbutton></div>' + '</div>' + '<div class="lbody" ng-style="jsProp.bodyStyle" vscroll="null"><p class="msgdlg-title"  ng-style="jsProp.titleStyle" ng-show="jsProp.isShowTitle">{{jsProp.title}}</p><p  ng-hide="jsProp.welcomeimageblockconfig" ng-style="jsProp.messageStyle" class="msgdlg-message"></p><div id="welcomeimg" ng-show="jsProp.welcomeimageblockconfig" ng-style="jsProp.imgStyle"></div></div>' + '<div class="lfooter"  ng-style="jsProp.footerStyle">' + '<div class="lbtns" ng-style="jsProp.btnsLayoutStyle"  ng-repeat="item in jsProp.items"><div class="lleft" ng-style="jsProp.lleftStyle" event="{{item.leftBtnEvent}}" eventData="{{item.leftBtnEventData}}"><tbbutton id="btn" param="item.leftBtn" cdr="0"></tbbutton></div><div class="lright" ng-style="jsProp.lrightStyle" event="{{item.rightBtnEvent}}" eventData="{{item.rightBtnEventData}}"><tbbutton  param="item.rightBtn" cdr="1" storedata="true" isecomp="1" ccid="msgdlg.packagesubscribe"></tbbutton></div><div style="clear:both"></div></div>' + '<div class="lbtn" ng-style="jsProp.btnLayoutStyle" ng-show="jsProp.isShowBtns">' + '<div class="lleft" ng-style="jsProp.lleftStyle" event="{{jsProp.leftBtnEvent}}" eventData="{{jsProp.leftBtnEventData}}">' + '<tbbutton id="btn" param="jsProp.leftBtn" cdr="1" storedata="true" isecomp="1" ccid="msgdlg.detail"></tbbutton></div>' + '<div class="lright" ng-style="jsProp.lrightStyle" event="{{jsProp.rightBtnEvent}}" eventData="{{jsProp.rightBtnEventData}}">' + '<tbbutton  param="jsProp.rightBtn" cdr="1" storedata="false" isecomp="0" ccid="msgdlg.cancel"></tbbutton></div><div style="clear:both"></div></div>' + '<div class="ldetail" ng-show="jsProp.isShowLinkBtn" event="{{jsProp.linkBtnEvent}}" eventData="{{jsProp.linkBtnEventData}}">' + '<tbbutton param="jsProp.linkBtn" cdr="1" storedata="false" isecomp="1" ccid="msgdlg.link"></tbbutton></div>' + '</div></div>',
        controller: [
            '$scope',
            '$element',
            '$attrs',
            'coreService',
            '$timeout',
            'coreUtils',
            'Const',
            function($scope, $element, $attrs, coreService, $timeout, coreUtils, Const) {
                $scope.jsProp = {};
                $scope.cssProp = {};
                $scope.showDlg = function(opt) {
                    if (opt && $scope.jsProp.dataMapping) {
                        var option = coreUtils.transfer(opt || {}, $scope.jsProp.dataMapping);
                        $scope.jsProp = coreUtils.extendDeep($scope.jsProp, option);
                        //alert(JSON.stringify($scope.jsProp));
                        if ($scope.jsProp.messages instanceof Array) {
                            //alert("inside");
                            var template = $scope.jsProp.messageTemplate;
                            var param = $scope.jsProp.messages;
                            $scope.jsProp.messages = template.replace(/\{[0-9]\}/g, function(s, i, str) {
                                var index = parseInt(s.substring(s.indexOf('{') + 1, s.indexOf('}')));
                                return param[index];
                            });
                        }

                        $element[0].querySelector('.msgdlg-message').innerHTML = $scope.jsProp.messages;
                        //support show more than one packages begin at 2015/3/22
                        var items = $scope.jsProp.btnsData;
                        if (items) {
                            $scope.jsProp.items = [];
                            var s = coreUtils.JSON2String($scope.jsProp.btnItem);
                            var maxCount = parseInt($scope.jsProp.btnItem.maxShowRecords || 3);
                            var temp = undefined;
                            for (var i = 0, len = items.length; i < len && i < maxCount; i++) {
                                temp = coreUtils.transfer(items[i], $scope.jsProp.btnItemDataMapping);
                                $scope.jsProp.items[i] = (coreUtils.extendDeep(coreUtils.String2JSON(s), temp));
                            }
                        }
                        //support show more than one packages end at 2015/3/22


                        $scope.jsProp.isShowDlg = true;
                        $scope.jsProp.show = {
                            "display": "block"
                        };
                        if ($scope.jsProp.timeout) {
                            $scope.autoHide($scope.jsProp.timeout);
                        }
                    }
                };
                //automatically hide
                $scope.autoHide = function(timeout) {
                    $timeout(function() {
                        if ($scope.jsProp.isShowDlg) {
                            $scope.jsProp.isShowDlg = false;
                            //trigger hide event ,maybe appicon need show red spot
                            coreService.fireEvent($element.attr('cid'), 'msgdlg.auto.hide', null);
                            top.tlbs.notificationCdrData = null;
                        }
                    }, timeout * 1000);
                };
                //handly hide  such as click close tbbutton;
                $scope.hide = function() {
                    $scope.jsProp.isShowDlg = false;
                };
                $scope.init = function() {
                    coreService.registerComponentInstance($element.attr('cid'), $scope);
                    var defaultOpt = {
                            JS: {
                                isShowDlg: false,
                                isShowHeader: true,
                                isShowTitle: true,
                                isShowClosBtn: true,
                                isShowBtns: true,
                                isShowLinkBtn: false,
                                headerInfo: '',
                                messages: '',
                                title: ''
                            },
                            CSS: {}
                        },
                        properties = coreService.getInitProperties($attrs['cid']) || {},
                        jsProp = properties.JS || {},
                        cssProp = properties.CSS || {},
                        jsData = coreUtils.String2JSON($attrs['jsdata']),
                        cssData = coreUtils.String2JSON($attrs['cssdata']);
                    $scope.jsProp = coreUtils.extendDeep(defaultOpt.JS, jsProp, jsData);
                    $scope.cssProp = coreUtils.extendDeep(defaultOpt.CSS, cssProp, cssData);
                    $element.css($scope.cssProp || {});
                    //$scope.showDlg({'message':'dddddd','name':'hello','id':'23'});
                    //$scope.hide();
                    if ($scope.jsProp.messages instanceof Array) {
                        var template = $scope.jsProp.messageTemplate;
                        var param = $scope.jsProp.messages;
                        $scope.jsProp.messages = template.replace(/\{[0-9]\}/g, function(s, i, str) {
                            var index = parseInt(s.substring(s.indexOf('{') + 1, s.indexOf('}')));
                            return param[index];
                        });
                    }
                    $element[0].querySelector('.msgdlg-message').innerHTML = $scope.jsProp.messages;
                };
                $scope.eventMap = {};
                $scope.compData = {};
                $scope.compData.JS = {};
                $scope.compData.JS['cdrData'] = {};
                $scope.eventMap['show'] = $scope.showDlg;
                $scope.eventMap['hide'] = $scope.hide;
                var bindEvent = function() {
                    $element.bind(Const.touchEvent.start, function(e) {
                        //mod by y00131156 at 2015/04/17 begin
                        //should delete this,otherwise <a href=></a> click function invaild
                        var target = e.target;
                        if (target.tagName != "A") {
                            e.stopPropagation();
                            e.preventDefault();
                        }
                        //e.stopPropagation();
                        //e.preventDefault();
                        //mod by y00131156 at 2015/04/17 end
                        var target = angular.element(e.target);
                        while (target && !target.attr('event')) {
                            target = target.parent();
                        }
                        //$scope.jsProp.isShowDlg = false;
                        coreService.fireEvent($element.attr('cid'), target.attr('event'), target.attr('eventdata'));
                        var targetElement = angular.element(angular.element(target));
                        if (null == targetElement.attr("cdr")) {
                            targetElement = angular.element(angular.element(target).children()[0]);
                        }
                        if (null != targetElement && null != targetElement.attr("cdr") && "1" == targetElement.attr("cdr")) {
                            var cdrConfig = {
                                'cdrType': 'uitracingcdr',
                                'enable': true,
                                'storeData': targetElement.attr("storedata") == 'true'
                            };
                            $scope.compData.JS.cdrData = {
                                'pageId': $scope.pageID,
                                'componentId': targetElement.attr("ccid") || '',
                                'iseComp': targetElement.attr("isecomp") || '0',
                            };
                            coreUtils.cdrService(cdrConfig, $scope.compData.JS.cdrData);
                            var componentId = targetElement.attr("ccid") || '';
                            if ('msgdlg.close' == componentId || 'msgdlg.cancel' == componentId) {
                                top.tlbs.notificationCdrData = null;
                            }
                        }

                    });
                };
                $scope.$on($attrs['cid'] + '_handleEvent', function(event, cevent, args, deferred) {
                    $scope.eventMap[cevent](args);
                    if (null != deferred) {
                        deferred.resolve();
                    }
                });
                bindEvent();
            }
        ],
        link: function($scope, $element, $attr, ctl) {
            $scope.pageID = ctl.pageID;
            $scope.componentType = 'msgdlg';
            $scope.init();
        }
    };
});
uiCore.directive('itab', [
    'coreService',
    'coreUtils',
    '$timeout',
    function(coreService, coreUtils, $timeout) {
        return {
            restrict: 'E',
            replace: true,
            require: '^pid',
            template: '<div><div ng-repeat="tab in compData.JS.tabs" id="{{tab.id}}" ng-show="tab.display||true" ng-style="getSingleTabStyle(tab.id,$index)" ng-click="onClickTab(tab,true);$event.stopPropagation();"><richtext param=\'{"CSS":compData.JS.textConfig.CSS,"JS":{"text":tab.name,"clickable":false}}\'></richtext></div></div>',
            scope: {},
            controller: [
                '$scope',
                '$element',
                '$attrs',
                '$window',
                function($scope, $element, $attrs, $window) {
                    $scope.cid = $attrs.cid;
                    $scope.compData = {
                        'CSS': {
                            'display': 'block',
                            'height': '1.8em',
                            'width': '15em'
                        },
                        'JS': {
                            'excludeids': '',
                            'tabDataRespPath': '',
                            'tabDataTabName': 'name',
                            'tabStyle': {
                                'defaultStyle0': {
                                    'width': '16.2em',
                                    'float': 'left',
                                    'height': '1.8em',
                                    'line-height': '1.8em',
                                    'cursor': 'pointer',
                                    'color': '#6e6d6b',
                                    'overflow': 'hidden',
                                },
                                'defaultStyle1': {
                                    'width': '8.1em',
                                    'float': 'left',
                                    'height': '1.8em',
                                    'line-height': '1.8em',
                                    'cursor': 'pointer',
                                    'color': '#6e6d6b',
                                    'overflow': 'hidden'
                                },
                                'defaultStyle2': {
                                    'width': '5.4em',
                                    'float': 'left',
                                    'height': '1.8em',
                                    'line-height': '1.8em',
                                    'cursor': 'pointer',
                                    'color': '#6e6d6b',
                                    'overflow': 'hidden'
                                },
                                'selectedStyle': {
                                    'background': 'transparent'
                                },
                                'unselectedStyle': {
                                    'background': ''
                                }
                            },
                            'tabs': [],
                            'currentSelected': '',
                            'textConfig': {
                                'CSS': {
                                    'font-family': 'Microsoft Yahei',
                                    'font-size': '0.55em'
                                },
                                'JS': {
                                    'text': ''
                                }
                            },
                            'cdrConfig': {
                                'uitracingcdr': {
                                    'cdrType': 'uitracingcdr',
                                    'enable': true,
                                    'storeData': false
                                }
                            }
                        }
                    };
                    $scope.eventMap = {};
                    var ONE_TAB_STYLE = 1;
                    var TWO_TAB_STYLE = 2;
                    $scope.onClickTab = function(tab, isUserClick) {
                        $scope.compData.JS.currentSelected = tab;
                        coreService.fireEvent($scope.cid, 'tabClick', tab);
                        if (isUserClick) {
                            if (coreUtils.cdrUtils.canWriteUITracingCDR($scope.compData.JS.cdrConfig)) {
                                $scope.compData.JS['cdrData'] = {};
                                $scope.compData.JS.cdrData = {
                                    'pageId': $scope.pageID,
                                    'componentId': $scope.cid
                                };
                                coreUtils.cdrService($scope.compData.JS.cdrConfig.uitracingcdr, $scope.compData.JS.cdrData);
                            }
                        }
                    };
                    $scope.isActiveTab = function(tabid) {
                        if (null != $scope.compData.JS.currentSelected) {
                            return tabid == $scope.compData.JS.currentSelected.id;
                        } else {
                            return false;
                        }
                    };
                    $scope.getTabBarStyle = function() {
                        var children = $element.children();
                        var totalWidth = 0,
                            style = null;
                        for (var i = 0; i < children.length; i++) {
                            style = top.window.getComputedStyle(children[i], null);
                            totalWidth += children[i].offsetWidth + parseInt(style['marginLeft'] || 0) + parseInt(style['marginRight'] || 0);
                        }
                        var fontSize = parseInt(top.window.getComputedStyle($element[0], null)['fontSize']);
                        var defaultStyleObj = getSingleTabDefaultStyle($scope.compData.JS.tabs.length);
                        $scope.compData.CSS['width'] = children.length * parseFloat(defaultStyleObj.width.substring(0, defaultStyleObj.width.indexOf('em'))) + 0.01 + 'em';
                        $element.css($scope.compData.CSS);
                    };
                    function getSingleTabDefaultStyle(categoryCount) {
                    	var defaultStyleObj = {};
                    	switch(categoryCount) {
                    		case ONE_TAB_STYLE : 
                    			defaultStyleObj = $scope.compData.JS.tabStyle.defaultStyle0;
                    			break;
                    		case TWO_TAB_STYLE : 
                    			defaultStyleObj = $scope.compData.JS.tabStyle.defaultStyle1;
                    			break;
                    		default : 
                    			defaultStyleObj = $scope.compData.JS.tabStyle.defaultStyle2;
                    	}
                    	return defaultStyleObj;
                    };
                    $scope.getSingleTabStyle = function(tabid, id) {
                        if (null != $scope.compData.JS.currentSelected && null != tabid && tabid == $scope.compData.JS.currentSelected.id) {
                        	
                            var obj = coreUtils.extendDeep(getSingleTabDefaultStyle($scope.compData.JS.tabs.length), $scope.compData.JS.tabStyle.selectedStyle);
                            if ($scope.compData.JS.tabs[id].activecategoryimage)
                                obj["background-image"] = 'url("' + $scope.compData.JS.tabs[id].activecategoryimage + '")';
                            else
                                obj["background-image"] = " ";
                            return obj;
                        } else {
                            var obj = coreUtils.extendDeep(getSingleTabDefaultStyle($scope.compData.JS.tabs.length), $scope.compData.JS.tabStyle.unselectedStyle);
                            if ($scope.compData.JS.tabs[id].inactivecategoryimage)
                                obj["background-image"] = 'url("' + $scope.compData.JS.tabs[id].inactivecategoryimage + '")';
                            else
                                obj["background-image"] = " ";
                            return obj;
                        }
                    };
                    $scope.extendComponentData = function(componetData) {
                        $scope.compData = coreUtils.extendDeep($scope.compData, componetData);
                    };
                    $scope.selectTabByIndex = function(tabIndex) {
                        if (null != $scope.compData.JS.tabs && null != $scope.compData.JS.tabs[tabIndex]) {
                            $scope.compData.JS.currentSelected = $scope.compData.JS.tabs[tabIndex];
                        }
                    };

                    $scope.selectTabById = function(tabId) {
                        if (null != $scope.compData.JS.tabs && null != tabId.data) {
                            var selectTabId = tabId.data;
                            for (var i = 0; i < $scope.compData.JS.tabs.length; i++) {
                                var singleTab = $scope.compData.JS.tabs[i];
                                if (singleTab.id === selectTabId) {
                                    $scope.compData.JS.currentSelected = singleTab;
                                    break;
                                }
                            }
                        }
                    };

                    $scope.tabByIndex = function(tabIndex) {
                        if (null != $scope.compData.JS.tabs && null != $scope.compData.JS.tabs[tabIndex.data - 1]) {
                            $scope.compData.JS.currentSelected = $scope.compData.JS.tabs[tabIndex.data - 1];
                        }
                    };
                    $scope.changeTabDisplayByIndex = function(tabIndex, display) {
                        if (null != $scope.compData.JS.tabs && null != $scope.compData.JS.tabs[tabIndex]) {
                            $scope.compData.JS.tabs[tabIndex].display = display;
                        }
                    };
                    $scope.changeTabDisplayById = function(tabId, display) {
                        var keepGoing = true;
                        if (null != $scope.compData.JS.tabs) {
                            angular.forEach($scope.compData.JS.tabs, function(tab) {
                                if (keepGoing) {
                                    if (tabId == tab.id) {
                                        tab.display = display;
                                        keepGoing = false;
                                    }
                                }
                            });
                        }
                    };
                    $scope.updateTabsData = function(tabsData) {
                        if (null != $scope.compData.JS.excludeids && $scope.compData.JS.excludeids.length > 0) {
                            var tabsDataArray = null;
                            var excludeidsArray = $scope.compData.JS.excludeids.split(',');
                            var tobeRemovedArray = [];
                            if ($scope.compData.JS.tabDataRespPath) {
                                tabsDataArray = coreUtils.transfer(tabsData, $scope.compData.JS.tabDataRespPath);
                            } else {
                                tabsDataArray = tabsData;
                            }
                            tabsDataArray = tabsDataArray.filter(function(returnableObjects) {
                                return !(!!~excludeidsArray.indexOf(returnableObjects.id));
                            });

                            if ($scope.compData.JS.reverse) {
                                $scope.compData.JS.tabs = tabsDataArray.slice().reverse();
                            } else {
                                $scope.compData.JS.tabs = tabsDataArray;
                            }
                        } else {
                            var recvdData;
                            if ($scope.compData.JS.tabDataRespPath) {
                                recvdData = coreUtils.transfer(tabsData, $scope.compData.JS.tabDataRespPath);
                            } else {
                                recvdData = tabsData;
                            }

                            if ($scope.compData.JS.reverse) {
                                $scope.compData.JS.tabs = recvdData.slice().reverse();
                            } else {
                                $scope.compData.JS.tabs = recvdData;
                            }

                        }
                        $scope.$evalAsync(
                            function() {
                                $scope.tabDataRefresh();
                                if (null != $scope.compData.JS.currentSelected && '' != $scope.compData.JS.currentSelected) {
                                    $scope.onClickTab($scope.compData.JS.currentSelected, false);
                                }
                                //add by s00900236 at 2015-03-20 begin
                                //reason:DTS2015031903369 Reset scroll on tab data load
                                if ($scope.compData.JS.reverse && null != $element.parent().parent()[0].attributes['sscroll']) {
                                    $element.parent().parent()[0].scrollLeft = $element.parent().parent()[0].scrollWidth;
                                } else if (null != $element.parent().parent()[0].attributes['sscroll'] && $element.parent().parent()[0].scrollLeft > 0) {
                                    $element.parent().parent()[0].scrollLeft = 0;
                                }
                                //add by s00900236 2015-03-20 end
                                $timeout(function() {
                                    $scope.getTabBarStyle();
                                });
                            });
                    };
                    $scope.tabDataRefresh = function() {
                        var keepGoing = true;

                        if ($scope.compData.JS.reverse && null != $element.parent().parent()[0].attributes['sscroll']) {
                            $element.parent().parent()[0].scrollLeft = $element.parent().parent()[0].scrollWidth;
                        } else if (null != $element.parent().parent()[0].attributes['sscroll'] && $element.parent().parent()[0].scrollLeft > 0) {
                            $element.parent().parent()[0].scrollLeft = 0;
                        }
                        if (null != $scope.compData.JS.tabs) {
                            var tabsData;
                            if ($scope.compData.JS.reverse) {
                                tabsData = $scope.compData.JS.tabs.slice().reverse();
                            } else {
                                tabsData = $scope.compData.JS.tabs;
                            }
                            angular.forEach(tabsData, function(tab) {
                                if (keepGoing) {
                                    if (tab.display || true) {
                                        $scope.compData.JS.currentSelected = tab;
                                        keepGoing = false;
                                    }
                                }
                            });
                        }
                    };
                    $scope.selectCurrentTab = function(inputData) {
                        if (null != $scope.compData.JS.currentSelected && '' != $scope.compData.JS.currentSelected) {
                            $scope.onClickTab($scope.compData.JS.currentSelected, false);
                        }
                    };
                    $scope.eventMap['tabByIndex'] = $scope.tabByIndex;
                    $scope.eventMap['isActiveTab'] = $scope.isActiveTab;
                    $scope.eventMap['selectTabByIndex'] = $scope.selectTabByIndex;
                    $scope.eventMap['selectTabById'] = $scope.selectTabById;
                    $scope.eventMap['changeTabDisplayByIndex'] = $scope.changeTabDisplayByIndex;
                    $scope.eventMap['changeTabDisplayById'] = $scope.changeTabDisplayById;
                    $scope.eventMap['updateTabsData'] = $scope.updateTabsData;
                    $scope.eventMap['selectCurrentTab'] = $scope.selectCurrentTab;
                    $scope.eventMap['tabDataRefresh'] = $scope.tabDataRefresh;
                    $scope.$on($scope.cid + '_handleEvent', function(eventObj, event, inputData, deferred) {
                        $scope.eventMap[event](inputData);
                        if (null != deferred) {
                            deferred.resolve();
                        }
                    });
                    $scope.init = function() {
                        coreService.registerComponentInstance($scope.cid, $scope);
                        $scope.extendComponentData(coreService.getInitProperties($scope.cid));
                        $scope.tabDataRefresh();
                        $scope.getTabBarStyle();
                    };
                }
            ],
            link: function(scope, element, attrs, ctrl) {
                scope.pageID = ctrl.pageID;
                scope.componentType = 'itab';
                scope.init();
            }
        };
    }
]);
uiCore.directive("logodock",function(){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout","$window","coreService","coreUtils",function(r,p,h,B,n,w,d){var f=300;var A=function(){return{width:(top.window.innerWidth||top.window.document.documentElement.clientWidth||top.window.document.body.clientWidth),height:(top.window.innerHeight||top.window.document.documentElement.clientHeight||top.window.document.body.clientHeight)}};r.moved=false;var b=A().height,o=0;var l=angular.element,s=angular.copy,v=angular.forEach,m=angular.isString,x=angular.extend;var g,c,j=0;var e={stopPropagation:false,shouldBlurOnDrag:false},u=function(D,C){D.delta=k(C,D.pos);D.distance=k(C,D.origin);D.pos={x:C.x,y:C.y};D.updatedAt=Date.now()},k=function(C,E){var D={x:C.x-E.x,y:C.y-E.y};D.magnitude=Math.sqrt(D.x*D.x+D.y*D.y);return D},q=function(C){return C&&(C.tagName==="INPUT"||C.tagName==="SELECT"||C.tagName==="TEXTAREA")},i=function(C){return{origin:{x:C.x,y:C.y},pos:{x:C.x,y:C.y},distance:{x:0,y:0,magnitude:0},delta:{x:0,y:0,magnitude:0},startedAt:Date.now(),updatedAt:Date.now(),stopped:false,active:true}},z=function(E){b=A().height;o=parseFloat(top.window.getComputedStyle(p[0]).height);E=E.originalEvent||E;var D=l(E.target||E.srcElement);e.stopPropagation&&E.stopPropagation();var C=E.touches?E.touches[0]:E;if(e.shouldBlurOnDrag&&q(D)){document.activeElement&&document.activeElement.blur()}self.state=i({x:C.clientX,y:C.clientY})},y=function(E){E=E.originalEvent||E;if(null!=self.state&&self.state.active){r.moved=true;E.preventDefault();e.stopPropagation&&E.stopPropagation();var C=E.touches?E.touches[0]:E;C={x:C.clientX,y:C.clientY};var D=Date.now()-self.state.updatedAt;if(D>f){self.state=i(C)}u(self.state,C);if(self.state.pos.y<=0){p.parent().parent().css({top:"0px"})}else{if(self.state.pos.y<=(b-o)&&self.state.pos.y>o){p.parent().parent().css({top:self.state.pos.y+"px"})}}w.commonServiceRef.schedulerService({on:"autoclose"},{cycle:"1",interval:"5000",start:"2"})}},t=function(C){if(null!=self.state&&self.state.active&&null!=self.state.distance&&r.moved==true){r.moved=false;C=C.originalEvent||C;e.stopPropagation&&C.stopPropagation();var D=top.tlbs.dockPosition||false;if(self.state.pos.y>=(b/2)){if(D){w.fireEvent(p.attr("cid"),"moveBottom",{});top.tlbs.dockPosition=false;var E={on:"toolbardockupdate"};w.commonServiceRef.remoteService(E,{dockposition:false})}p.parent().parent().css({bottom:"0px",top:"initial"})}else{if(!D){w.fireEvent(p.attr("cid"),"moveTop",{});top.tlbs.dockPosition=true;var E={on:"toolbardockupdate"};w.commonServiceRef.remoteService(E,{dockposition:true})}p.parent().parent().css({top:"0px",bottom:"initial"})}self.state.updatedAt=Date.now();self.state.stopped=(self.state.updatedAt-self.state.startedAt)>f;self.state={}}},a=function(){p.bind("touchstart",z);p.bind("touchmove",y);p.bind("touchend touchcancel",t);p.bind("mousedown",z);p.bind("mousemove",y);p.bind("mouseup mouseout",t)};B(a,0)}],link:function(c,b,a){}}});
uiCore.directive("idivholder",["coreService","coreUtils","$timeout",function(c,a,b){return{restrict:"AE",replace:true,transclude:true,template:"<div {{param}} ng-transclude></div>",scope:{param:"=param"},require:"^pid",controller:["$scope","$element","$attrs",function(f,e,d){f.cid=d.cid;f.eventMap={};f.compData={CSS:{},JS:{clickable:false,animation:false,clickevent:"",stateconfig:{state:0,state0:{},state1:{}}}};f.extendComponentData=function(g){f.compData=a.extendDeep(f.compData,g)};f.init=function(){c.registerComponentInstance(f.cid,f);f.extendComponentData(c.getInitProperties(f.cid))};f.getHolderStyle=function(){if(null!=f.compData.JS.stateconfig["state"+f.compData.JS.stateconfig.state]){return a.extendDeep(f.compData.CSS,f.compData.JS.stateconfig["state"+f.compData.JS.stateconfig.state])}};f.handleClick=function(){c.fireEvent(f.cid,(f.compData.JS.clickevent||"")+"click"+f.compData.JS.stateconfig.state)};f.clickDisable=function(){};f.changeState=function(h,g){if(null!=h&&null!=h.cstate){if(f.compData.JS.stateconfig.state!=h.cstate){f.compData.JS.stateconfig.state=h.cstate;f.applyStyle();f.$evalAsync(function(){if(null!=g){if(f.compData.JS.animation){if(top.tlbs.isTransitionSupported){e.on(top.tlbs.transitionendEvent,function(i){g.resolve()})}else{g.resolve()}}else{g.resolve()}}})}else{if(null!=g){g.resolve()}}}};f.applyStyle=function(){if(null!=f.compData.JS.stateconfig["state"+f.compData.JS.stateconfig.state]){a.extendDeep(f.compData.CSS,f.compData.JS.stateconfig["state"+f.compData.JS.stateconfig.state])}e.css(f.compData.CSS)};f.changeExtraState=function(h,g){if(null!=h&&null!=h.cstate){f.compData.CSS=a.extendDeep(f.compData.CSS,f.compData.JS.stateconfig["state"+h.cstate]);f.applyStyle()}};f.eventMap.changeState=f.changeState;f.eventMap.changeExtraState=f.changeExtraState;f.$on(f.cid+"_handleEvent",function(j,h,i,g){f.eventMap[h](i,g)});f.$on("stateChange",function(g){f.applyStyle()});f.$watch(f.param,function(g){if(f.param){f.compData=f.param;f.applyStyle()}})}],link:function(f,e,d,g){f.pageID=g.pageID;f.componentType="idivholder";f.init()}}}]);
uiCore.directive("sscroll",function(){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout","$window","coreService",function(k,d,D,u,G,C){var A=angular.element(top.window);var h=D.sscroll;var y=("h"==h);var g=("v"==h);var a=("hi"==h);var s=300;var I=angular.element,K=angular.copy,b=angular.forEach,i=angular.isString,j=angular.extend;var m,J,x,q=0;var r={stopPropagation:false,shouldBlurOnDrag:true},p=function(){m=d.children();if(a){J=angular.element(m[0]).children()}else{J=m}x=angular.element('<div id="sscrolldiv" style="height:100%;width:100%;overflow:hidden;" hwidth="0"></div>');if(D.reverse){x.css("float","right")}x.append(m);d.append(x);if(a){angular.element(d.parent()[0]).append('<div class="ui-com-hscroll-left-arrow"></div><div  class="ui-com-hscroll-right-arrow"></div>')}},n=function(V){var M=top.window.getComputedStyle(V);var S=parseInt(M.getPropertyValue("margin-top"),10)+parseInt(M.getPropertyValue("padding-top"),10);var Q=parseInt(M.getPropertyValue("margin-left"),10)+parseInt(M.getPropertyValue("padding-left"),10);var R=parseInt(M.getPropertyValue("margin-right"),10)+parseInt(M.getPropertyValue("padding-right"),10);var O=parseInt(M.getPropertyValue("margin-bottom"),10)+parseInt(M.getPropertyValue("padding-bottom"),10);var T=parseInt(M.getPropertyValue("top"),10);var L=parseInt(M.getPropertyValue("bottom"),10);var P=parseInt(M.getPropertyValue("left"),10);var U=parseInt(M.getPropertyValue("right"),10);var w=parseInt(M.getPropertyValue("border-right-width"),10);var X=parseInt(M.getPropertyValue("border-left-width"),10);var W=parseFloat(M.getPropertyValue("height"),10);var N=parseFloat(M.getPropertyValue("width"),10);return{top:S+(isNaN(T)?0:T),bottom:O+(isNaN(L)?0:L),height:W,width:N,left:Q+(isNaN(P)?0:P)-(isNaN(X)?0:X),right:R+(isNaN(U)?0:U)-(isNaN(w)?0:w)}},z=function(){if(null!=m){var M=0;var N=parseFloat(top.window.getComputedStyle(d[0],null)["fontSize"]);for(var L=0;L<J.length;L++){var w=n(J[L]);M+=(w.height+w.top+w.bottom)}x.css("height",M/N+"em")}},H=function(){if(null!=m){var L=0;var P=parseFloat(top.window.getComputedStyle(d[0],null)["fontSize"]);for(var N=0;N<J.length;N++){var w=n(J[N]);L+=(w.width+w.left+w.right)}if(L==0&&a){var M=d.children().children().children();for(var N=0;N<M.length;N++){var w=n(M[N]);L+=(w.width+w.left+w.right)}L+=0.3}if(L>0){var O=x.attr("hwidth");x.attr("hwidth",L);x.css("width",(L/P)+"em")}}},B=function(L,w){L.delta=v(w,L.pos);L.distance=v(w,L.origin);L.pos={x:w.x,y:w.y};L.updatedAt=Date.now()},v=function(w,M){var L={x:w.x-M.x,y:w.y-M.y};L.magnitude=Math.sqrt(L.x*L.x+L.y*L.y);return L},o=function(w){return w&&(w.tagName==="INPUT"||w.tagName==="SELECT"||w.tagName==="TEXTAREA")},l=function(w){return{origin:{x:w.x,y:w.y},pos:{x:w.x,y:w.y},distance:{x:0,y:0,magnitude:0},delta:{x:0,y:0,magnitude:0},startedAt:Date.now(),updatedAt:Date.now(),stopped:false,active:true}},e=function(M){M=M.originalEvent||M;var L=I(M.target||M.srcElement);r.stopPropagation&&M.stopPropagation();var w=M.touches?M.touches[0]:M;if(r.shouldBlurOnDrag&&o(L)){document.activeElement&&document.activeElement.blur()}self.state=l({x:w.pageX,y:w.pageY});if(a){c()}},f=function(M){M=M.originalEvent||M;if(null!=self.state&&self.state.active){M.preventDefault();r.stopPropagation&&M.stopPropagation();var w=M.touches?M.touches[0]:M;w={x:w.pageX,y:w.pageY};var L=Date.now()-self.state.updatedAt;if(L>s){self.state=l(w)}B(self.state,w);if(y||a){d[0].scrollLeft-=self.state.delta.x}if(g){d[0].scrollTop-=self.state.delta.y}if(a){c();C.commonServiceRef.schedulerService({on:"autoclose"},{cycle:"1",interval:"5000",start:"2"})}}},F=function(w){if(null!=self.state&&self.state.active){w=w.originalEvent||w;r.stopPropagation&&w.stopPropagation();self.state.updatedAt=Date.now();self.state.stopped=(self.state.updatedAt-self.state.startedAt)>s;self.state={};if(a){t()}}},E=function(){p();if(y||a){H()}if(g){z()}d.bind("touchstart",e);d.bind("touchmove",f);d.bind("touchend touchcancel",F);d.bind("mousedown",e);d.bind("mousemove",f);d.bind("mouseup mouseout",F)},c=function(){var M=top.window.getComputedStyle(d[0]);var N=parseInt(M.getPropertyValue("border-right-width"),10);var w=parseInt(M.getPropertyValue("border-left-width"),10);if((d[0].offsetWidth-N-w)<x[0].offsetWidth){var L=n(d[0]);if(parseFloat(d[0].scrollLeft)<=0){angular.element(d.parent()[0].querySelector(".ui-com-hscroll-right-arrow")).css({opacity:"1.15",display:"block"});angular.element(d.parent()[0].querySelector(".ui-com-hscroll-left-arrow")).css({opacity:"0",display:"none"})}else{if(parseFloat(L.width+L.left+L.right+d[0].scrollLeft+2)>=x[0].offsetWidth){angular.element(d.parent()[0].querySelector(".ui-com-hscroll-left-arrow")).css({opacity:"1.15",display:"block"});angular.element(d.parent()[0].querySelector(".ui-com-hscroll-right-arrow")).css({opacity:"0",display:"none"})}else{angular.element(d.parent()[0].querySelector(".ui-com-hscroll-left-arrow")).css({opacity:"1.15",display:"block"});angular.element(d.parent()[0].querySelector(".ui-com-hscroll-right-arrow")).css({opacity:"1.15",display:"block"})}}}},t=function(){angular.element(d.parent()[0].querySelector(".ui-com-hscroll-left-arrow")).css({opacity:"0",display:"none"});angular.element(d.parent()[0].querySelector(".ui-com-hscroll-right-arrow")).css({opacity:"0",display:"none"})};k.getParentDimentions=function(){if(null!=m){return{h:top.window.getComputedStyle(d[0]).height,w:top.window.getComputedStyle(d[0]).width}}return{}};k.$watch(k.getParentDimentions,function(L,w){if(y||a){H()}if(g){z()}},true);u(E,0)}],link:function(c,b,a){}}});
uiCore.directive("wscroll",function(){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout","Const",function(t,q,i,x,m){t.$watch(function(){if(v){return angular.element(v)[0].offsetHeight}},function(C,B){if(e){if(A()){angular.element(e).css("display","block");angular.element(v).css("margin-top","0px");d.css("top","0px");d.css("height",u()+"px")}else{angular.element(e).css("display","none")}}});var h,c,k=0,w=0,s=false,g,v,d,e;var y=/preto/i.test(navigator.userAgent)||/opera/i.test(navigator.userAgent);var j=function(){h=q.children();c=angular.element('<div class="ui-com-wscroll-wrapper"></div>');c.append(h);q.append(c)},l=function(){h=q.children();scrollbarDiv=angular.element('<div class="ngscrollbar-container-y"><div class="ngscrollbar-y"></div></div>');angular.element(h[0]).append(scrollbarDiv)},p=function(){g=angular.element(h[0]);var B=g.children();v=B[0];e=B[1];d=angular.element(e.querySelector(".ngscrollbar-y"))},r=function(){return angular.element(v)[0].offsetHeight},n=function(){return angular.element(g)[0].offsetHeight},o=function(B){if(Math.abs(parseInt(B))<r()-n()){return true}else{return false}},A=function(){return r()>n()},u=function(){return Math.pow(n(),2)/r()},f=function(){if(A()){angular.element(e).css("display","block");d.css("height",u()+"px")}else{angular.element(e).css("display","none")}},b=function(B){angular.element(v).css("margin-top",B+"px");d.css("top",-B/r()*n()+"px")},z=function(){q.on("wheel",function(C){C.preventDefault();C.stopPropagation();var B=parseInt(angular.element(v).css("margin-top"),10);if(C.deltaY>0){B=B-10}else{B=B+10}if(B>0){return}if(!o(B)){return}b(B)})},a=function(){z();j();l();p();u()};x(a,0)}],link:function(c,b,a){}}});
uiCore.directive("hscroll",function(){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout","Const",function(m,n,k,d,b){var c,e,l=0,f=angular.element('<div style="height:100%;overflow:hidden;"></div>'),a=function(){c=n.children();minWidth=parseInt(top.window.getComputedStyle(n[0],null)["width"]);e=angular.element('<div class="ui-com-hscroll-wrapper" style="height:100%;"></div>');g();e.append(c);f.append(e);n.append(f);if(m.hscrollType=="1"){n.append('<div class="ui-com-hscroll-left-arrow"></div><div  class="ui-com-hscroll-right-arrow"></div>')}},g=function(){var o=0;style=null;for(var p=0;p<c.length;p++){style=top.window.getComputedStyle(c[p],null);o+=c[p].offsetWidth+parseInt(style.marginLeft)+parseInt(style.marginRight)}if(o<minWidth){o=minWidth}var q=parseInt(top.window.getComputedStyle(n[0],null)["fontSize"]);e.css("width",(o/q)+"em")},i=function(){},h=function(){var p=b.touchEvent.start,o=b.touchEvent.move,q=b.touchEvent.end;f.bind(p,function(u){g();var s=parseInt(top.window.getComputedStyle(n[0],null)["fontSize"]);var x=u.touches?u.touches[0].pageX:u.pageX,t=u.target,w=function(A){var y=A.touches?A.touches[0].pageX:A.pageX;var z=y-x;x=y;f[0].scrollLeft-=z;if(m.hscrollType=="1"){if(parseInt(f[0].scrollLeft)<=0){angular.element(n[0].querySelector(".ui-com-hscroll-right-arrow")).css("opacity","1.15")}else{if(parseInt(f[0].offsetWidth+f[0].scrollLeft)+2>=e[0].offsetWidth){angular.element(n[0].querySelector(".ui-com-hscroll-left-arrow")).css("opacity","1.15")}else{angular.element(n[0].querySelector(".ui-com-hscroll-left-arrow")).css("opacity","1.15");angular.element(n[0].querySelector(".ui-com-hscroll-right-arrow")).css("opacity","1.15")}}}},v=function(y){},r=function(y){angular.element(n[0].querySelector(".ui-com-hscroll-left-arrow")).css("opacity","0");angular.element(n[0].querySelector(".ui-com-hscroll-right-arrow")).css("opacity","0");top.document.removeEventListener(o,w,false);top.document.removeEventListener(q,r,false)};top.document.addEventListener(o,w,false);top.document.addEventListener(q,r,false)})},j=function(){h();a()};d(j,0)}],link:function(d,e,b){d.hscrollType=b.hscrolltype;var g=e[0].offsetLeft;var c=e[0].offsetTop;var a=e[0].offsetWidth;var f=e[0].offsetHeight}}});
uiCore.directive("vscroll",function(){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout","Const",function(m,n,k,e,b){var d,f,l=0,h=0;var c=/preto/i.test(navigator.userAgent)||/opera/i.test(navigator.userAgent);var a=function(){d=n.children();f=angular.element('<div class="ui-com-vscroll-wrapper"></div>');f.append(d);n.append(f)},i=function(){l=parseInt(top.window.getComputedStyle(n[0],null)["height"]);h=0;style=null;for(var o=0;o<d.length;o++){style=top.window.getComputedStyle(d[o],null);h+=d[o].offsetHeight+parseInt(style.marginTop)+parseInt(style.marginBottom)}h=h+12;if(h<l){h=l}var p=parseInt(top.window.getComputedStyle(n[0],null)["fontSize"]);f.css("height",h/p+"em")},g=function(){var r=b.touchEvent.start;var q=b.touchEvent.move;var s=b.touchEvent.end;var p=0;var o=false;n.bind(r,function(x){i();var u=f[0].style.webkitTransform||f[0].style.mozTransform||f[0].style.msTransform||f[0].style.msTransform||f[0].style.oTransform;if(u){p=u.split(",")[1]&&parseInt(u.split(",")[1])}else{p=0}var v=x.touches?x.touches[0].pageY:x.pageY,w=x.target,y=function(A){var B=A.touches?A.touches[0].pageY:A.pageY;var z=B-v;if(Math.abs(z)>3){if(!o){o=true}A.stopPropagation();A.preventDefault()}v=B;p+=z;if(p>0){p=0}else{if(h+p<l){p=l-h}}if(c){f.css("-o-transform","translate(0,"+p+"px)");f.css("transform","translate(0,"+p+"px)")}else{f.css("-webkit-transform","translate3d(0,"+p+"px,0)");f.css("-moz-transform","translate3d(0,"+p+"px,0)");f.css("-o-transform","translate3d(0,"+p+"px,0)");f.css("-ms-transform","translate3d(0,"+p+"px,0)");f.css("transform","translate3d(0,"+p+"px,0)")}},t=function(z){if(o){z.stopPropagation();z.preventDefault();o=false}top.document.removeEventListener(q,y,false);top.document.removeEventListener(s,t,false)};top.document.addEventListener(q,y,false);top.document.addEventListener(s,t,false)})},j=function(){g();a()};e(j,0)}],link:function(c,b,a){}}});
uiCore.directive("ifit",["$window","coreService",function(a){return{restrict:"A",replace:false,controller:["$scope","$element","$attrs","$window",function(e,d,b,g,f){var c=angular.element(top.window);e.getDimentions=function(){return{width:(top.window.innerWidth||top.window.document.documentElement.clientWidth||top.window.document.body.clientWidth),height:(top.window.innerHeight||top.window.document.documentElement.clientHeight||top.window.document.body.clientHeight),h:top.window.innerHeight,w:top.window.innerWidth,ph:top.window.getComputedStyle(d.parent()[0]).height,pw:parseFloat(top.window.getComputedStyle(d.parent()[0]).width),fs:parseFloat(top.window.getComputedStyle(d[0],null)["fontSize"])}};e.$watch(e.getDimentions,function(j,h){e.rresize()},true);e.rresize=function(){var j=e.getDimentions();var m=d.attr("ifit");var q=!isNaN(parseFloat(m))&&isFinite(m);var r=j.fs;var l=j.pw;if(!q){if(l>0){var o=0;var n=d.parent().children();for(i=0;i<n.length;i++){var h=n[i];if(null==h.attributes.ifit){o+=parseFloat(top.window.getComputedStyle(h).width)}}var p=o/r;if(m=="bnBar"){d.css("width",(((l/r)-p)-1)+"em")}else{d.css("width",((l/r)-p)+"em")}}}else{var k=j.width;if(m==0){d.css("width",(k/r)+"em")}else{if(l>0){d.css("width",((l/r)-m)+"em")}}}};e.$watch(function(){return d.attr("ifit")},function(h){e.rresize()});c.bind("resize",function(){e.$apply()})}]}}]);
uiCore.directive("tbresize",["$window","$interval",function(b,a){return{restrict:"A",replace:false,controller:["$scope","$element","$attrs",function(g,f,d){var c=function(){var i=top.document.getElementsByName("viewport");if(!i||i.length==0){return false}else{return true}};if(top.barresizetype=="1"){var h=function(){if(/window/ig.test(navigator.userAgent)){f.css({"font-size":"27px"})}else{var j=parseInt(top.window.innerWidth);var i=parseInt(top.window.innerHeight);if(j<319){f.css({"font-size":"12px"})}else{if(j>=320&&j<359){f.css({"font-size":"14px"})}else{if(j>=360&&j<399){if(i<=485){f.css({"font-size":"14px"})}else{if(i<530){f.css({"font-size":"15px"})}else{f.css({"font-size":"16px"})}}}else{if(j>=400&&j<479){if(i<740){f.css({"font-size":"19px"})}else{f.css({"font-size":"20px"})}}else{if(j>=480&&j<539){f.css({"font-size":"20px"})}else{if(j>=540&&j<639){f.css({"font-size":"22px"})}else{if(j>=640&&j<719){f.css({"font-size":"28px"})}else{if(j>=720&&j<879){f.css({"font-size":"32px"})}else{if(j>=880&&j<959){f.css({"font-size":"36px"})}else{if(j>=960&&j<1079){f.css({"font-size":"44px"})}else{if(j>=1080&&j<1280){f.css({"font-size":"48px"})}else{if(j>=1280){f.css({"font-size":"56px"})}}}}}}}}}}}}}};h();top.window.addEventListener("load",h);a(function(){h()},3000);return}g.pWidth=0;g.pHeight=0;g.resize=function(){var j=360,l=320;g.cWidth=top.window.innerWidth;g.cHeight=top.window.innerHeight;var m=0,i=0;if(g.pWidth==g.cWidth){return}if(g.pWidth==g.cWidth&&g.cHeight!=g.pHeight&&Math.min(g.pHeight,g.cHeight)/Math.max(g.pHeight,g.cHeight)>=0.8){g.pWidth=g.cWidth;g.pHeight=g.cHeight;return}if(g.pWidth==g.cWidth&&g.pHeight==g.cHeight){return}if(g.cWidth<=g.cHeight){m=g.cWidth/l}else{m=g.cHeight/j}if(l*m>g.cWidth){m=g.cWidth/l}var k=m*18;if(!(top.tlbs.templateID.indexOf("pcbar")===-1)){f.css("font-size",27+"px")}else{f.css("font-size",k+"px")}g.pWidth=g.cWidth;g.pHeight=g.cHeight};g.resizeForPreview=function(i,m){var l=360,k=320;if(i<=m){cFontSize=i/k}else{cFontSize=m/baseHeight}var j=cFontSize*18;if(!(top.tlbs.templateID.indexOf("pcbar")===-1)){f.css("font-size",27+"px")}else{f.css("font-size",j+"px")}};if(top.tlbs.w&&top.tlbs.h){g.resizeForPreview(parseInt(top.tlbs.w),parseInt(top.tlbs.h))}else{g.cWidth=top.window.innerWidth;g.cHeight=top.window.innerHeight;var e=angular.element(top.window);e.bind("resize",function(){g.resize()});g.resize();g.intervalObject=a(function(){g.resize()},10)}}]}}]);
uiCore.directive("tbparentisolator",[function(){return{restrict:"AE",controller:["$scope","$element","$attrs",function(l,j,e){var c=300;var h=angular.element,m=angular.copy,o=angular.forEach,i=angular.isString,p=angular.extend;var d,a,g=0;var b={stopPropagation:false,shouldBlurOnDrag:true},k=function(s){return s&&(s.tagName==="INPUT"||s.tagName==="SELECT"||s.tagName==="TEXTAREA")},f=function(s){return{origin:{x:s.x,y:s.y},pos:{x:s.x,y:s.y},distance:{x:0,y:0,magnitude:0},delta:{x:0,y:0,magnitude:0},startedAt:Date.now(),updatedAt:Date.now(),stopped:false,active:true}},q=function(u){u=u.originalEvent||u;var t=h(u.target||u.srcElement);b.stopPropagation&&u.stopPropagation();var s=u.touches?u.touches[0]:u;if(b.shouldBlurOnDrag&&k(t)){document.activeElement&&document.activeElement.blur()}self.state=f({x:s.pageX,y:s.pageY})},r=function(t){t=t.originalEvent||t;var s=t.target;if(null!=self.state&&self.state.active&&!k(s)){t.preventDefault()}},n=function(s){if(null!=self.state&&self.state.active){s=s.originalEvent||s;b.stopPropagation&&s.stopPropagation();self.state={}}};j.bind("touchstart",q);j.bind("touchmove",r);j.bind("touchend touchcancel",n)}]}}]);
uiCore.directive("iappbuttonholder",["coreService","coreUtils","$timeout","Const","$window",function(j,g,f,i,h){return{restrict:"AE",replace:true,template:'<div ng-style="compData.CSS" ><div ng-style="compData.JS.appbuttoncontainer.CSS"><div  ng-style="compData.JS.appbutton.CSS" ng-repeat="apps in compData.JS.dataset | limitTo:compData.JS.maxcount" id="news_app_{{$index}}" ng-click="compData.JS.clickable?handleClick({{$index}}):clickDisable();$event.stopPropagation();"><imageholder cid="appimage" dynamicproperties="{\'CSS\':{\'background-image\':apps.imageurl}}" param="compData.JS.appbutton.JS.imageconfig"></imageholder><irichtext cid="apptext" param="settextdata(compData.JS.appbutton.JS.textconfig,apps.title)"></irichtext></div></div></div>',scope:{param:"=param"},require:"^pid",controller:["$scope","$element","$attrs",function(a,b,c){a.cid=c.cid;a.index=0;a.maxindex=0;a.eventMap={};a.imageset={};a.compData={};a.handleClick=function(d){d=a.compData.JS.dataset[d].weblink;if(null!=d&&d.length!=0){j.commonServiceRef.dynamicService(null,{serviceType:"urlservice",openurl:d})}};a.clickDisable=function(){};a.settextdata=function(d,e){d.JS.textdata=e;return d};a.extendComponentData=function(d){a.compData=g.extendDeep(a.compData,d);f(function(){a.$apply()})};a.init=function(){j.registerComponentInstance(a.cid,a);a.extendComponentData(j.getInitProperties(a.cid));a.maxindex=a.compData.JS.maxcount;this.setNewsappData(window.newsparam)};a.setNewsappData=function(d){if(a.compData.JS.newsappsConfigRespPath){a.compData.JS.dataset=g.transfer(d,a.compData.JS.newsappsConfigRespPath)}if(null!=a.compData.JS.dataset&&a.compData.JS.dataset.length<a.compData.JS.maxcount){a.maxindex=a.compData.JS.dataset.length}};a.eventMap.setNewsappData=a.setNewsappData;a.$on(a.cid+"_handleEvent",function(d,m,e,n){a.eventMap[m](e,n)})}],link:function(b,c,d,a){b.pageID=d.ppageid||a.pageID;b.componentType="iappbuttonholder";b.init()}}}]);
uiCore.directive("ihtmltext",["coreService","coreUtils","$timeout",function(c,a,b){return{restrict:"EA",replace:true,require:"^pid",scope:{param:"=param"},template:"<div {{param}}></div>",controller:["$scope","$element","$attrs","coreService","coreUtils",function(g,f,e,h,d){g.cid=e.cid;g.eventMap={};g.compData={CSS:{},JS:{textdata:"",clickable:false,dataMapping:"",stateconfig:{state:0,state0:{},state1:{}}}};g.handleClick=function(){h.fireEvent(g.cid,"click"+g.compData.JS.stateconfig.state)};g.clickDisable=function(){};g.$on(e.cid+"_handleEvent",function(k,l,j,i){if(g.eventMap[l]){g.eventMap[l](j);if(null!=i){i.resolve()}}});g.extendComponentData=function(i){g.compData=d.extendDeep(g.compData,i)};g.init=function(){if(g.cid){h.registerComponentInstance(g.cid,g);g.extendComponentData(h.getInitProperties(g.cid))}d.extendDeep(g.compData,g.param||{});g.updateHTML(g.compData.JS.textdata);g.applyStyle()};g.$watch(function(){return f.attr("itext")},function(i){if(null!=i){g.updateHTML(i)}});g.$watch(g.param,function(i){if(g.param){g.compData=g.param;g.applyStyle()}});g.$watch(g.compData,function(){if(null!=g.compData.JS.textdata){g.updateHTML(g.compData.JS.textdata)}});g.updateHTML=function(i){f[0].innerHTML=i};g.updateHTMLText=function(i){if(g.compData.JS.dataMapping){g.updateHTML(d.transfer(i,g.compData.JS.dataMapping))}};g.eventMap["text.update"]=g.updateHTMLText;g.applyStyle=function(){if(null!=g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]){d.extendDeep(g.compData.CSS,g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state])}f.css(g.compData.CSS)}}],link:function(g,e,d,f){g.pageID=f.pageID;g.componentType="ihtmltext";g.init()}}}]);
uiCore.directive("irichtext",["coreService","coreUtils","$timeout",function(c,a,b){return{restrict:"EA",replace:true,require:"^pid",scope:{param:"=param"},template:'<div ng-click="compData.JS.clickable?handleClick():clickDisable();" {{param}}>{{compData.JS.textdata}}</div>',controller:["$scope","$element","$attrs","coreService","coreUtils",function(g,f,e,h,d){g.cid=e.cid;g.eventMap={};g.compData={CSS:{},JS:{textdata:"",clickable:false,stateconfig:{state:0,state0:{},state1:{}}}};g.handleClick=function(){h.fireEvent(g.cid,"click"+g.compData.JS.stateconfig.state)};g.clickDisable=function(){};g.$on(e.cid+"_handleEvent",function(k,l,j,i){if(g.eventMap[l]){g.eventMap[l](j);if(null!=i){i.resolve()}}});g.extendComponentData=function(i){g.compData=d.extendDeep(g.compData,i)};g.init=function(){h.registerComponentInstance(f.attr("cid"),g);g.extendComponentData(h.getInitProperties(g.cid));g.applyStyle()};g.$watch(g.param,function(i){if(g.param){g.compData=g.param;g.applyStyle()}});g.applyStyle=function(){if(null!=g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]){d.extendDeep(g.compData.CSS,g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state])}f.css(g.compData.CSS)}}],link:function(g,e,d,f){g.pageID=f.pageID;g.componentType="irichtext";g.init()}}}]);
uiCore.directive("iholder",["coreService","coreUtils","$timeout","$rootScope",function(d,b,c,a){return{restrict:"E",replace:true,transclude:true,template:'<div ng-click="compData.JS.clickable && handleClick();$event.preventDefault();$event.stopPropagation();" {{param}} ng-transclude></div>',scope:{param:"=param"},require:"^pid",controller:["$scope","$element","$attrs","$compile","$templateCache","$timeout","$document",function(h,g,f,j,e,i,k){h.cid=f.cid;h.classid="."+h.cid;h.eventMap={};h.compData={CSS:{},JS:{clickable:false,animation:false,clickevent:"",stateconfig:{stylestates:"",extrastates:"",cstylestate:"",cextrastate:"",state:0,estate:0,state0:{},state1:{}}}};h.extendComponentData=function(l){h.compData=b.extendDeep(h.compData,l)};h.init=function(){d.registerComponentInstance(h.cid,h);h.extendComponentData(d.getInitProperties(h.cid));h.processStyle();h.updateStyle();if(null!=f.templateurl){h.getTemplate()}};h.getHolderStyle=function(){if(null!=h.compData.JS.stateconfig["state"+h.compData.JS.stateconfig.state]){return b.extendDeep(h.compData.CSS,h.compData.JS.stateconfig["state"+h.compData.JS.stateconfig.state])}};h.handleClick=function(){d.fireEvent(h.cid,(h.compData.JS.clickevent||"")+"click"+h.compData.JS.stateconfig.state)};h.changeState=function(m,l){if(null!=m&&null!=m.cstate){if(h.compData.JS.stateconfig.state!=m.cstate){h.compData.JS.stateconfig.state=m.cstate;h.updateStyle();h.$evalAsync(function(){if(null!=l){if(h.compData.JS.animation){if(top.tlbs.isTransitionSupported){g.on(top.tlbs.transitionendEvent,function(n){l.resolve()})}else{l.resolve()}}else{l.resolve()}}})}else{if(null!=l){l.resolve()}}}};h.changeExtraState=function(m,l){if(h.compData.JS.stateconfig.estate!=m.cstate){h.compData.JS.stateconfig.estate=m.cstate;h.updateStyle()}if(null!=l){l.resolve()}};h.changeStateAfterDisplay=function(m,l){g.css("display","block");h.forceReflow();h.changeState(m,l)};h.changeStateThenHide=function(m,l){h.changeState(m,l);if(null!=l){l.promise.then(function(){g.css("display","none")})}};h.forceReflow=function(){var l=(g instanceof angular.element)?g[0]:g;return l.offsetWidth+1};h.hide=function(l){g.css({display:"none"})};h.show=function(l){g.css({display:"block"});var m=h.compData.JS.closetime;if(l&&(l.messageid==undefined)){return false}if(m){top.tlbs.messageid=l.messageid;i(function(){if(g.css("display")!="none"){top.tlbs.notificationCdrData=null}h.hide()},m)}};h.eventMap.changeState=h.changeState;h.eventMap.hide=h.hide;h.eventMap.show=h.show;h.eventMap.changeExtraState=h.changeExtraState;h.eventMap.changeStateAfterDisplay=h.changeStateAfterDisplay;h.eventMap.changeStateThenHide=h.changeStateThenHide;h.$on(h.cid+"_handleEvent",function(o,m,n,l){h.eventMap[m](n,l)});h.$watch(h.param,function(l){if(h.param){h.compData=h.param}});h.processStyle=function(){var t=JSON.stringify(h.compData.CSS);t=h.formatStyleData(t);d.commonServiceRef.appendStyle(h.classid,"",t);var r=h.compData.JS.stateconfig.stylestates.split("|");var q=r.length;var s=h.compData.JS.stateconfig.extrastates.split("|");var u=s.length;for(var p=0;p<q;p++){var n=r[p];if(n.length>0){t=JSON.stringify(h.compData.JS.stateconfig[n]);t=h.formatStyleData(t);d.commonServiceRef.appendStyle(h.classid,"."+n,t);for(var o=0;o<u;o++){var l=s[o];if(l.length>0){t=JSON.stringify(h.compData.JS.stateconfig[l]);t=h.formatStyleData(t);d.commonServiceRef.appendStyle(h.classid,"."+n+"."+l,t)}}}}g.addClass(h.cid);if(null!=h.compData.JS.stateconfig.state){var m="state"+h.compData.JS.stateconfig.state;h.compData.JS.stateconfig.stylestates=m}};h.formatStyleData=function(l){l=l.replace(/","/g,";").replace(/":"/g,":").replace(/\\/g,"").replace(/{"/,"{").replace(/"}/,"}");return l};h.updateStyle=function(){g.removeClass(h.compData.JS.stateconfig.cstylestate);g.removeClass(h.compData.JS.stateconfig.cextrastate);h.compData.JS.stateconfig.cstylestate="state"+h.compData.JS.stateconfig.state;g.addClass(h.compData.JS.stateconfig.cstylestate);if(h.compData.JS.stateconfig.state!=h.compData.JS.stateconfig.estate){h.compData.JS.stateconfig.cextrastate="state"+h.compData.JS.stateconfig.estate;g.addClass(h.compData.JS.stateconfig.cextrastate)}};h.getTemplate=function(){var l=e.get(f.templateurl);g.html(l);j(g.contents())(h)}}],link:function(g,f,e,h){g.pageID=h.pageID;g.componentType="iholder";g.init()}}}]);
uiCore.directive("imageholder",["coreService","coreUtils","$timeout",function(c,a,b){return{restrict:"AE",replace:true,template:'<div ng-click="compData.JS.clickable && handleClick();$event.preventDefault();compData.JS.stopp && $event.stopPropagation()" {{param}}></div>',scope:{param:"=param",dynamicproperties:"=dynamicproperties"},require:"^pid",controller:["$scope","$element","$attrs",function(f,e,d){f.cid=d.cid;f.eventMap={};f.compData={CSS:{},JS:{clickable:false,stopp:false,stateconfig:{state:0,state0:{},state1:{}},cdrConfig:{uitracingcdr:{cdrType:"uitracingcdr",enable:true,storeData:false}}}};var g=[];var h=function(i){if(!i.pid||!i.cid||!i.event){return}g.push(i)};f.changeState=function(j,i){if(null!=j&&null!=j.cstate){if(f.compData.JS.stateconfig.state!=j.cstate){f.compData.JS.stateconfig.state=j.cstate;f.applyStyle();f.$evalAsync(function(){if(null!=i){if(f.compData.JS.animation){if(top.tlbs.isTransitionSupported){e.on(top.tlbs.transitionendEvent,function(k){i.resolve()})}else{i.resolve()}}else{i.resolve()}}})}}else{if(null!=i){i.resolve()}}};f.handleClick=function(){a.recordTracingCdr(f.pageID,f.cid,f.compData.JS.cdrConfig);c.fireEvent(f.cid,"click"+f.compData.JS.stateconfig.state);var k;for(var j in g){k=g[j];c.fireEvent(k.pid+"_"+k.cid,k.event)}g.length=0};f.extendComponentData=function(i){f.compData=a.extendDeep(f.compData,i)};f.eventMap.changeState=f.changeState;f.eventMap.addClickListener=h;f.$on(f.cid+"_handleEvent",function(l,j,k,i){f.eventMap[j](k);if(null!=i){i.resolve()}});f.init=function(){c.registerComponentInstance(f.cid,f);f.extendComponentData(c.getInitProperties(f.cid));f.$watch(f.dynamicproperties,function(i){if(f.dynamicproperties){f.update()}});f.applyStyle()};f.update=function(){if(typeof f.dynamicproperties=="string"){f.dynamicproperties=a.String2JSON(f.dynamicproperties)}if(f.dynamicproperties.CSS["background-image"]!=""){e.css({"background-image":'url("'+f.dynamicproperties.CSS["background-image"]+'")'})}};f.applyStyle=function(){if(null!=f.compData.JS.stateconfig["state"+f.compData.JS.stateconfig.state]){a.extendDeep(f.compData.CSS,f.compData.JS.stateconfig["state"+f.compData.JS.stateconfig.state])}e.css(f.compData.CSS)};f.$on("stateChange",function(i){f.applyStyle()});d.$observe("statechange",function(i){if(f.param){f.compData=f.param;f.applyStyle()}});f.$watch(f.param,function(i){if(f.param){f.compData=f.param;f.applyStyle()}})}],link:function(f,e,d,g){f.pageID=g.pageID;f.componentType="imageholder";f.init()}}}]);
uiCore.directive("pvctrl",["coreService","coreUtils","$timeout",function(c,a,b){return{restrict:"A",replace:false,controller:["$scope","$element","$attrs","$interval",function(g,f,d,j){g.cid="pvctrl";g.init=function(){c.registerComponentInstance(g.cid,g);g.ctrlPageGroup={};var k=angular.element(f[0].querySelectorAll('[lload="0"]'));for(var l=0;l<k.length;l++){var m=angular.element(k[l]);g.ctrlPageGroup[m.attr("pid")]=m}};function h(m){var l=new RegExp("[\\u4E00-\\u9FA5\uFE30-\uFFA0]+","g");var k=new RegExp("[0-9a-zA-z]+","g");if(l.test(m)==true){return 15}else{if(k.test(m)==true){return 1}else{return 15}}}function i(o){var l="";var n=0,k=0,m;for(m=0;m<o.length;m++){k=n+h(o[m]);if(k>1000){break}else{n=k}}if(m==o.length){return o}else{return o.substring(0,m)}}g.lloadApps=function(o,n){if(null!=o.applist&&o.applist.length>0){var m=o.applist.split(",");var q=new e().eexecute(m,n,o);var k=o.sresptime||"";var p={cdrType:"uinotiftracingcdr",enable:true,storeData:false};var l={replay:o.replay,taskId:o.taskId,componentId:m[0],pageId:m[0],message:encodeURIComponent(encodeURIComponent(i(o.message||""))),sresptime:k,functionid:o.functionid};a.cdrService(p,l);top.tlbs.notificationCdrData=l}else{if(null!=n){n.resolve()}}};var e=function(){};e.prototype.eexecute=function(r,k,q){var m=0,l=r.length,p=0,o=r,k=k;var n=function(t){var u=o[p];var w=g.ctrlPageGroup[u];if(null!=w){w.attr("lload","1");var v={cdrType:"uidisplaycdr",enable:true,storeData:false};var s={replay:q.replay,pageId:u,displayType:1,displayResult:0};a.cdrService(v,s)}p=p+1;if(p==l&&null!=k){b(function(){k.resolve()})}};j(n,10,l,this.loadKey)}}],link:function(f,e,d,g){f.pageID=g.pageID;f.componentType="pvctrl";f.init()}}}]);
uiCore.directive("iresize",["$window","$interval",function(b,a){return{restrict:"A",replace:false,controller:["$scope","$element","$attrs",function(f,e,c){var d=angular.element(top.window);d.bind("resize",function(){f.$apply()});f.getWindowDimensions=function(){return{h:top.window.innerHeight,w:top.window.innerWidth}};f.$watch(f.getWindowDimensions,function(h,g){f.rresize()},true);f.prevWidth=0;f.prevHeight=0;f.currWidth=top.window.innerWidth;f.currHeight=top.window.innerHeight;f.rresize=function(){var h=360,j=320;f.currWidth=top.window.innerWidth;f.currHeight=top.window.innerHeight;var k=0,g=0;if(f.prevWidth==f.currWidth&&f.currHeight!=f.prevHeight&&Math.min(f.prevHeight,f.currHeight)/Math.max(f.prevHeight,f.currHeight)>=0.8){f.prevWidth=f.currWidth;f.prevHeight=f.currHeight;return}if(f.prevWidth==f.currWidth&&f.prevHeight==f.currHeight){return}if(f.currWidth<=f.currHeight){k=f.currWidth/j}else{k=f.currHeight/h}if(j*k>f.currWidth){k=f.currWidth/j}var i=k*18;i=i>27?27:i;e.css("font-size",i+"px");f.prevWidth=f.currWidth;f.prevHeight=f.currHeight}}]}}]);uiCore.directive("lresize",["$window","$interval",function(b,a){return{restrict:"A",replace:false,controller:["$scope","$element","$attrs",function(h,f,c){var e=angular.element(top.window);e.bind("resize",function(){h.$apply()});h.getWindowDimensions=function(){return{h:top.window.innerHeight,w:top.window.innerWidth,fs:parseFloat(top.window.getComputedStyle(f[0],null)["fontSize"]),width:(top.window.innerWidth||top.window.document.documentElement.clientWidth||top.window.document.body.clientWidth),height:(top.window.innerHeight||top.window.document.documentElement.clientHeight||top.window.document.body.clientHeight),ph:top.window.getComputedStyle(f.parent()[0]).height,pw:parseFloat(top.window.getComputedStyle(f.parent()[0]).width),cw:f.css("width")}};e.bind("scroll",function(){h.rresize()});h.$watch(h.getWindowDimensions,function(j,i){h.rresize()},true);var d=360,g=320;h.prevWidth=0;h.prevHeight=0;h.rresize=function(){if((top.window.innerWidth/top.document.documentElement.clientWidth)!=1){f.css("bottom",top.document.documentElement.clientHeight-(top.window.pageYOffset+top.window.innerHeight)+"px");f.css("position","absolute");if(f.css("width")!="0%"){f.css("right","-"+top.window.pageXOffset+"px")}else{if(top.window.pageXOffset==0){f.css("right",top.document.documentElement.clientWidth-top.window.innerWidth+"px")}else{if(top.window.pageXOffset>0){f.css("right","-"+top.window.pageXOffset+"px")}}}}else{h.setFontSize();f.css("position","fixed");f.css("bottom","0px");f.css("right","0px")}f.css("-webkit-transform","scale("+top.window.innerWidth/top.document.documentElement.clientWidth+")");f.css("-webkit-box-sizing","border-box");f.css("box-sizing","border-box");f.css("-webkit-transition","all 0.2s ease-in-out");f.css("-webkit-transform-origin","0 100%")};h.setFontSize=function(){h.currWidth=top.window.innerWidth;h.currHeight=top.window.innerHeight;var k=0,i=0;if(h.prevWidth==h.currWidth&&h.currHeight!=h.prevHeight&&Math.min(h.prevHeight,h.currHeight)/Math.max(h.prevHeight,h.currHeight)>=0.8){h.prevWidth=h.currWidth;h.prevHeight=h.currHeight;return}if(h.prevWidth==h.currWidth&&h.prevHeight==h.currHeight){return}if(h.currWidth<=h.currHeight){k=h.currWidth/g}else{k=h.currHeight/d}if(g*k>h.currWidth){k=h.currWidth/g}var j=k*18;f.css("font-size",j+"px");h.prevWidth=h.currWidth;h.prevHeight=h.currHeight;h.prevWidth=h.currWidth;h.prevHeight=h.currHeight}}]}}]);
uiCore.directive("logodrag",["coreService",function(a){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout","Const","coreService",function(h,i,g,d,b,c){h.cid=g.cid;var j=function(){var m=0,k=0,n=i[0];var o=top.window.innerHeight,l=top.window.innerWidth;if(o==undefined){o=top.document.documentElement.offsetHeight;l=top.document.documentElement.offsetWidth}while(n!=null){m+=n.offsetLeft;k+=n.offsetTop;n=n.offsetParent;bottomPos=o-k-i[0].offsetHeight;rightPos=l-m-i[0].offsetWidth}return{x:rightPos,y:bottomPos}};var f=function(){var p="ontouchstart" in document?"touchstart":"mousedown",n="ontouchmove" in document?"touchmove":"mousemove",u="ontouchend" in document?"touchend":"mouseup",q=false,s=false,m=true,r=0,v=0,l=false;i.parent().css({position:"fixed"});i.bind(p,function(y){y.preventDefault();y.stopPropagation();var x=j();var z=y.touches?y.touches[0].pageY:y.pageY;var B=y.touches?y.touches[0]:y,A={x:B.pageX,y:B.pageY};if(o()){return}if(!(/Windows NT/g.test(navigator.userAgent))){c.fireEvent(h.cid,"unlockLogoClick",null);t()}l=true;var C=function(E){E.preventDefault();E.stopPropagation();if(o()){return}k();if(!q){q=true}var F=E.touches?E.touches[0].pageY:E.pageY;var D=E.touches?E.touches[0]:E;if(Math.abs(F-z)<5){return}i.parent().css({right:x.x+A.x-D.pageX+"px",bottom:x.y+A.y-D.pageY+"px"});l=false;c.fireEvent(h.cid,"lockLogoClick",null)},w=function(D){r=i.parent().css("bottom"),v=i.parent().css("right");if((r==""&&v=="")||(r=="18px"&&v=="30px")){top.document.removeEventListener(n,C,false);top.document.removeEventListener(u,w,false);return}if(l){c.fireEvent(h.cid,"unlockLogoClick",null);t()}if(q){D.stopPropagation();D.preventDefault();q=false}top.document.removeEventListener(n,C,false);top.document.removeEventListener(u,w,false)};top.document.addEventListener(n,C,false);top.document.addEventListener(u,w,false)});var o=function(){s=i.parent().hasClass("state1");return s},t=function(){l=false;i.parent().css({bottom:"18px",right:"30px"})},k=function(){i.css({opacity:"1"})}},e=function(){f()};d(e,0)}],link:function(d,c,b){}}}]);
uiCore.directive("ibutton",["coreService","coreUtils","$timeout",function(c,a,b){return{restrict:"EA",replace:true,require:"^pid",scope:{param:"=param"},template:'<div ng-click="compData.JS.clickable?handleClick():clickDisable();$event.stopPropagation();" {{param}}><div id="buttontextdiv">{{compData.JS.buttontext}}<div></div>',controller:["$scope","$element","$attrs","coreService","coreUtils",function(g,f,e,h,d){g.cid=e.cid;g.eventMap={};g.compData={CSS:{},JS:{buttontext:"",clickable:false,stateconfig:{state:0,state0:{},state1:{}},buttontextstyle:{CSS:{"font-size":"0.8em"},JS:{}}}};g.handleClick=function(){h.fireEvent(g.cid,"click"+g.compData.JS.stateconfig.state)};g.clickDisable=function(){};g.$on(e.cid+"_handleEvent",function(k,l,j,i){if(g.eventMap[l]){g.eventMap[l](j);if(null!=i){i.resolve()}}});g.extendComponentData=function(i){g.compData=d.extendDeep(g.compData,i);b(function(){g.$apply()})};g.init=function(){g.compData=g.param;g.applyStyle()};g.$watch(g.param,function(i){if(g.param){g.compData=g.param;g.applyStyle()}});g.applyStyle=function(){if(null!=g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state]){d.extendDeep(g.compData.CSS,g.compData.JS.stateconfig["state"+g.compData.JS.stateconfig.state])}f.css(g.compData.CSS);angular.element(f[0].querySelector('[id="buttontextdiv"]')).css(g.compData.JS.buttontextstyle.CSS)}}],link:function(g,e,d,f){g.pageID=f.pageID;g.componentType="ibutton";g.init()}}}]);
uiCore.directive("percentage",function(){return{restrict:"EA",replace:true,scope:{percent:"=",},require:"^pid",template:"<div class='ui-com-percentage'><div class='ui-com-percentage-value'></div><div class='ui-com-percentage-image'></div></div>",controller:["$scope","$element","$attrs","coreService","$timeout","coreUtils",function(d,c,b,f,e,a){d.setPercent=function(g){d.percent=g};d.showPercentage=function(){d.jsProp.styleSet=a.String2JSON(b.styleset);angular.element(c[0].querySelector(".ui-com-percentage-value")).css({"background-color":d.getPercentageColor().activecolor,width:d.percent+"%"});if((b.showpercentageimage=="true")&&(d.getPercentageColor().activeimage)){angular.element(c[0].querySelector(".ui-com-percentage-image")).css({"background-image":d.getPercentageColor().activeimage,left:(d.percent-1)+"%"})}};d.getPercentageColor=function(){var g=undefined;for(p in d.jsProp.styleSet){var h=p.split("_");if(h.length>0){if(parseInt(h[0])<=d.percent&&d.percent<=parseInt(h[1])){return d.jsProp.styleSet[p]}}}return d.jsProp.styleSet.defaultset.activecolor};d.init=function(){var k={},h=f.getInitProperties(b.cid)||{},l=h.JS||{},i=h.CSS||{},j=a.String2JSON(b.jsdata),g=a.String2JSON(b.cssdata);d.jsProp=a.extendDeep(k,l,j);d.cssProp=a.extendDeep(i,g);c.css(d.cssProp);e(d.showPercentage,0)}}],link:function(d,b,a,c){d.pageID=c.pageID;d.componentType="percentage";d.init()}}});
uiCore.directive("pid",function(){return{restrict:"A",replace:false,controller:["$scope","$element","$attrs",function(c,b,a){this.pageID=a.pid}]}});
uiCore.directive("ipage",function(){return{restrict:"AE",replace:false,scope:{},templateUrl:function(b,a){if(null!=a.lload&&a.lload==0){return"empty"}else{return a.templateurl||""}},controller:["$scope","$element","$attrs","$compile","$templateCache",function(d,c,b,e,a){d.loadState=c.attr("lload")|0;if(null!=c.attr("lload")){var f=d.$watch(function(){return c.attr("lload")},function(){var g=c.attr("lload");if(null!=g&&1==g&&0==d.loadState){var h=a.get(b.templateurl);c.html(h);e(c.contents())(d);d.loadState=1;f()}},true)}}],link:function(c,b,a){}}});
uiCore.directive("simplescroll",function(){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout","Const",function(j,k,h,d,a){var c,e,i=0,g=0;var b=/preto/i.test(navigator.userAgent)||/opera/i.test(navigator.userAgent);var f=function(){var t=a.touchEvent.start;var o=a.touchEvent.move;var x=a.touchEvent.end;var v=0;var l=0;var y=0;var p=0;var w=false;var s=0;var u=0;var n=false;var r=function(A){top.tlbs.popupTxtMove=false;var z=k[0].style.webkitTransform||k[0].style.mozTransform||k[0].style.msTransform||k[0].style.msTransform||k[0].style.oTransform;if(z){v=z.split(",")[1]&&parseInt(z.split(",")[1])}else{v=0}n=true;s=parseInt(h.totalheight||top.window.getComputedStyle(k[0],null)["height"])+20;u=parseInt(h.parentheight||top.window.getComputedStyle(k[0].parentNode,null)["height"]);l=A.touches?A.touches[0].pageY:A.pageY;if(s>u){top.document.addEventListener(o,q,false);top.document.addEventListener(x,m,false)}};var q=function(z){if(n){y=z.touches?z.touches[0].pageY:z.pageY;p=y-l;if(Math.abs(p)>3||w){top.tlbs.popupTxtMove=true;w=true;z.stopPropagation();z.preventDefault()}l=y;v+=p;if(v>0){v=0}else{if(v+s<=u){v=u-s}}if(b){k.css("-o-transform","translate(0,"+v+"px)");k.css("transform","translate(0,"+v+"px)")}else{k.css("-webkit-transform","translate3d(0,"+v+"px,0)");k.css("-moz-transform","translate3d(0,"+v+"px,0)");k.css("-o-transform","translate3d(0,"+v+"px,0)");k.css("-ms-transform","translate3d(0,"+v+"px,0)");k.css("transform","translate3d(0,"+v+"px,0)")}}};var m=function(z){if(w){z.stopPropagation();z.preventDefault();w=false}n=false;top.document.removeEventListener(o,q,false);top.document.removeEventListener(x,m,false)};k.bind(t,r)};d(f,0)}],link:function(c,b,a){}}});
uiCore.directive("slider",["coreService","coreUtils","$timeout","Const","$window",function(c,a,b,d,e){return{restrict:"AE",replace:true,template:'<div  ng-click="compData.JS.clickable?handleClick():clickDisable();$event.stopPropagation();" ><div style="position:relative;"><div ng-swipe-right="swiperight();" ng-swipe-left="swipeleft();"  ng-style="compData.CSS" ></div><div ng-show="compData.JS.enabletitle" ng-style="compData.JS.titleconfig.CSS"></div></div> <div ng-show="compData.JS.enablebullets" ng-style="compData.JS.bulletcontainerconfig.CSS"> <div ng-style="compData.JS.bulletconfig.CSS" ng-click="changeStatebyIndex($index);$event.stopPropagation();" ng-repeat="app in compData.JS.dataset | limitTo:compData.JS.maxcount" id="slider_bullet_{{$index}}"></div></div></div>',scope:{param:"=param"},require:"^pid",controller:["$scope","$element","$attrs",function(h,g,f){h.cid=f.cid;h.index=0;h.maxindex=0;h.eventMap={};h.imageset={};h.compData={};h.handleClick=function(){if(h.compData.JS.dataset[h.index].weblink&&h.compData.JS.dataset[h.index].weblink.split("http").length>1){e.open(h.compData.JS.dataset[h.index].weblink)}else{e.open("http://"+h.compData.JS.dataset[h.index].weblink)}};h.clickDisable=function(){};h.extendComponentData=function(j){h.compData=a.extendDeep(h.compData,j)};h.swipeleft=function(){h.index=h.index+1;if(h.index>parseInt(h.maxindex-1)){h.index=parseInt(h.maxindex-1)}h.changeState(h.index)};h.swiperight=function(){h.index=h.index-1;if(h.index<0){h.index=0}h.changeState(h.index)};h.init=function(){c.registerComponentInstance(h.cid,h);h.extendComponentData(c.getInitProperties(h.cid));h.maxindex=h.compData.JS.maxcount};h.setAdvertiseData=function(k,j){h.index=0;if(null!=j){j.resolve()}if(h.compData.JS.sliderConfigRespPath){h.compData.JS.dataset=a.transfer(k,h.compData.JS.sliderConfigRespPath)}b(function(){if(h.maxindex>0){angular.element(g[0].children[0].children[0]).css({height:h.compData.JS.sliderheight});h.changeState(0)}});if(null!=h.compData.JS.dataset&&h.compData.JS.dataset.length<h.compData.JS.maxcount){h.maxindex=h.compData.JS.dataset.length}if(null!=h.compData.JS.dataset&&h.compData.JS.dataset.length==0){angular.element(g[0].children[0].children[0]).css({height:"0%"})}else{angular.element(g[0].children[0].children[0]).css({height:h.compData.JS.sliderheight,margin:h.compData.JS.slidermargin})}};h.changeStatebyIndex=function(j){h.changeState(j);h.index=j};h.changeState=function(j){var k=g[0].querySelector("#slider_bullet_"+j);if(h.compData.JS.dataset){for(i=0;i<=h.maxindex-1;i++){angular.element(g[0].querySelector("#slider_bullet_"+i)).css({"background-color":h.compData.JS.bulletconfig.JS.stateconfig.state0.background_color})}}angular.element(k).css({"background-color":h.compData.JS.bulletconfig.JS.stateconfig.state1.background_color});if(h.compData.JS.dataset){if(h.compData.JS.dataset[j].imageurl){angular.element(g[0].children[0].children[0]).css({"background-image":'url("'+h.compData.JS.dataset[j].imageurl+'")',})}if(h.compData.JS.dataset[j].title){angular.element(g[0].children[0].children[1]).html(h.compData.JS.dataset[j].title)}}};h.eventMap.setAdvertiseData=h.setAdvertiseData;h.$on(h.cid+"_handleEvent",function(m,k,l,j){h.eventMap[k](l,j)});h.$watch(h.param,function(j){if(h.param){h.compData=h.param}})}],link:function(h,g,f,j){h.pageID=f.ppageid||j.pageID;h.componentType="slider";h.init()}}}]);
uiCore.directive("idropdown",["coreService","coreUtils","$timeout",function(c,a,b){return{restrict:"EA",replace:true,require:"^pid",scope:{param:"=param"},template:'<div><horizontal-container param="compData.JS.outerContainer"><horizontal-container  param="compData.JS.innerContainer" ng-show="compData.JS.supportMap"><div><select ng-click="handleSelectClick($event);" ng-change="handleOptionClick();" ng-style="compData.CSS" ng-model="compData.JS.selectedValue" ng-options="key.{{compData.JS.dataValue}} for key in compData.JS.Dataset" ></select></div></horizontal-container><horizontal-container  param="compData.JS.innerContainer" ng-show="compData.JS.supportListArray"><div><select ng-click="handleSelectClick($event);" ng-change="handleOptionClick();" ng-style="compData.CSS" ng-model="compData.JS.selectedValue" ng-options="key as key for key in compData.JS.Dataset" ></select></div></horizontal-container></horizontal-container></div>',controller:["$scope","$element","$attrs","coreService","coreUtils",function(g,f,e,h,d){g.cid=e.cid;g.eventMap={};g.compData={CSS:{},JS:{supportMap:true,supportListArray:false,dataValue:"langname",dataKey:"langid",clickable:false,Dataset:{},selectedValue:"0",getSelectedValue:"",stateconfig:{state:0,state0:{},state1:{}},outerContainer:{CSS:{display:"table-cell","vertical-align":"middle"},JS:{outerContainer:{border:"none","box-shadow":"none",display:"flex",extendable:false,height:"1em",position:"relative",width:"100%"},type:"outerContainer"}},innerContainer:{CSS:{"background-size":"auto auto","background-origin":"padding-box","background-attachment":"scroll",overflow:"hidden","background-color":"transparent",margin:"0",padding:"0","background-repeat":"repeat-x","background-position":"0px bottom","background-clip":"border-box"},JS:{innerContainer:{border:"none","box-shadow":"none",display:"table",extendable:false,height:"1em",position:"relative",margin:"0 auto"},type:"innerContainer"}},dataMapping:"respparam.usrPref.templateLangList",},};g.handleSelectClick=function(i){g.compData.JS.getSelectedValue=g.compData.JS.selectedValue[g.compData.JS.dataKey];i.stopPropagation()};g.handleOptionClick=function(){b(function(){g.$apply()})};g.extendComponentData=function(i){g.compData=d.extendDeep(g.compData,i);b(function(){g.$apply()})};g.getData=function(i){g.edata=d.extendDeep({},i);g.compData.JS.Dataset=g.edata;if(g.compData.JS.dataMapping){g.compData.JS.Dataset=d.transfer(i,g.compData.JS.dataMapping);g.compData.JS.selectedValue=g.compData.JS.Dataset[0];g.compData.JS.getSelectedValue=g.compData.JS.selectedValue[g.compData.JS.dataKey]}};g.refresh=function(i){g.compData.JS.selectedValue=g.compData.JS.Dataset[0]};g.init=function(){h.registerComponentInstance(f.attr("cid"),g);g.extendComponentData(h.getInitProperties(g.cid));var j=g.compData.JS.Dataset;g.compData.JS.Dataset=[];for(var k in j){g.compData.JS.Dataset.push(j[k])}g.compData.JS.selectedValue=g.compData.JS.Dataset[0]};g.eventMap["data.update"]=g.getData;g.eventMap.refresh=g.refresh;g.$on(g.cid+"_handleEvent",function(l,j,k,i){g.eventMap[j](k,i)})}],link:function(f,g,e,d,h){f.pageID=d.pageID;f.componentType="idropdown";f.init()}}}]);
uiCore.directive("idropdownlist",["coreService","coreUtils","$timeout",function(c,a,b){return{restrict:"EA",replace:true,require:"^pid",scope:{param:"=param"},template:'<div><horizontal-container param="compData.JS.sgH1" class="idropdownhorizantalline" ><horizontal-container  param="compData.JS.sgH1r1" class="idropdownhorizantalline" ><richtext param="compData.JS.sgpackeffectiveetime" ></richtext></horizontal-container><horizontal-container  param="compData.JS.sgH1r2" ><div class="idropdownlistmain" ><select ng-click="handleClick1($event);" ng-change="handleClick();" ng-style="compData.CSS"   ng-model="compData.JS.selectedValue" ng-options="key.name  for key in compData.JS.Dataset" ></select></div></horizontal-container></horizontal-container><horizontal-container param="compData.JS.sgH2" class="idropdownhorizantalline" ng-show="isShowSecondList"><horizontal-container param="compData.JS.sgH2r1" class="idropdownhorizantalline"  ><richtext param="compData.JS.sgpackeffectiveetime1"  ></richtext></horizontal-container><horizontal-container param="compData.JS.sgH2r2"  ><div class="idropdownlistmain" ><select ng-click="handleClick2($event);" class="ui_com_second_dropdown"  ng-disabled="disablelist" ng-style="compData.CSS"   ng-model="compData.JS.selectedValue2" ng-options="key as key.name for key in compData.JS.Dataset2" ></select></div></horizontal-container></horizontal-container></div>',controller:["$scope","$element","$attrs","coreService","coreUtils",function(g,f,e,h,d){g.cid=e.cid;g.eventMap={};g.compData={CSS:{},JS:{textdata:"",clickable:false,setflag:"1",key1:"time",key2:"period",selectedValue:"",selectedValue2:"",opacity:"0.2",stateconfig:{state:0,state0:{},state1:{}},sgpackeffectiveetime:{CSS:{color:"#999999","font-size":"0.55em","font-family":"Microsoft Yahei",width:"100%","text-align":"center",display:"table-cell","vertical-align":"middle"},JS:{text:"生效时间:"}},sgpackeffectiveetime1:{CSS:{color:"#999999","font-size":"0.55em","font-family":"Microsoft Yahei",width:"100%","text-align":"center",display:"table-cell","vertical-align":"middle"},JS:{text:"生效时长:"}},sgH1:{CSS:{},JS:{sgH1:{border:"none","box-shadow":"none",display:"flex",extendable:false,height:"2em",position:"relative",width:"100%"},type:"sgH1"}},sgH1r1:{CSS:{},JS:{sgH1r1:{border:"none","box-shadow":"none",display:"table",extendable:false,height:"2em",position:"relative",width:"22%","background-color":"#F6F6F6"},type:"sgH1r1"}},sgH1r2:{CSS:{},JS:{sgH1r2:{border:"none","box-shadow":"none",display:"table",extendable:false,height:"2em",position:"relative"},type:"sgH1r2"}},sgH2:{CSS:{},JS:{sgH2:{border:"none","box-shadow":"none",display:"flex",extendable:false,height:"2em",position:"relative",width:"100%"},type:"sgH2"}},sgH2r1:{CSS:{},JS:{sgH2r1:{border:"none","box-shadow":"none",display:"table",extendable:false,height:"2em",position:"relative",width:"22%","background-color":"#F6F6F6"},type:"sgH2r1"}},sgH2r2:{CSS:{},JS:{sgH2r2:{border:"none","box-shadow":"none",display:"table",extendable:false,height:"2em",position:"relative"},type:"sgH2r2"}},},};g.handleClick1=function(i){i.stopPropagation()};g.handleClick2=function(i){i.stopPropagation()};g.handleClick=function(){if(g.isMonthPack){return}if(g.compData.JS.selectedValue.value==g.compData.JS.setflag){g.disablelist=true;g.secondDropdown.css({opacity:g.compData.JS.opacity});g.compData.JS.selectedValue2=g.compData.JS.Dataset2[0]}else{g.disablelist=false;g.compData.JS.selectedValue2=g.compData.JS.Dataset2[1];g.secondDropdown.css({opacity:"1.0"})}b(function(){g.$apply()})};g.disablelist=false;g.isShowSecondList=true;g.clickDisable=function(){};g.extendComponentData=function(i){g.compData=d.extendDeep(g.compData,i);b(function(){g.$apply()})};g.getData=function(i){g.edata=d.extendDeep({},i);if(g.edata.isMonthPack){g.isMonthPack=parseInt(g.edata.isMonthPack)}if(g.isMonthPack){g.isShowSecondList=false;g.compData.JS.selectedValue2=g.compData.JS.Dataset2[0]}else{g.isShowSecondList=true}};g.refresh=function(i){g.compData.JS.selectedValue=g.compData.JS.Dataset[0];g.compData.JS.selectedValue2=g.compData.JS.Dataset2[1];g.disablelist=false;g.secondDropdown.css({opacity:"1.0"})};g.init=function(){h.registerComponentInstance(f.attr("cid"),g);g.extendComponentData(h.getInitProperties(g.cid));var j=g.compData.JS.Dataset;var k=g.compData.JS.Dataset2;g.compData.JS.Dataset=[];g.compData.JS.Dataset2=[];for(var l in j){g.compData.JS.Dataset.push(j[l])}for(var l in k){g.compData.JS.Dataset2.push(k[l])}g.compData.JS.selectedValue=g.compData.JS.Dataset[0];g.compData.JS.selectedValue2=g.compData.JS.Dataset2[1]};g.eventMap["data.update"]=g.getData;g.eventMap.refresh=g.refresh;g.$on(g.cid+"_handleEvent",function(l,j,k,i){g.eventMap[j](k,i)})}],compile:function(e,d){return{pre:function(h,i,g,f,j){h.pageID=f.pageID;h.componentType="idropdownlist";h.init()},post:function(i,g,h,f,j){var k=g[0].querySelector(".ui_com_second_dropdown");i.secondDropdown=angular.element(k)}}},}}]);
uiCore.directive("iradioselectiondiv",["coreService","coreUtils","$timeout",function(c,a,b){return{restrict:"EA",replace:false,require:"^pid",scope:{param:"=param"},template:'<div ng-style="compData.CSS"><div ng-click="handleClick({{$index}});$event.stopPropagation();"  ng-style="compData.JS.radiobutton.CSS"  ng-repeat="key in compData.JS.dataset" id="radio_options_{{$index}}" >{{key.name}}</div></div>',controller:["$scope","$element","$attrs","coreService","coreUtils",function(g,f,e,h,d){g.cid=e.cid;g.index=0;g.eventMap={};g.compData={};g.handleClick=function(j){g.changeState(j)};g.changeState=function(j){g.index=j;var k=f[0].querySelector("#radio_options_"+j);for(i=0;i<=f.children().children().length-1;i++){angular.element(f[0].querySelector("#radio_options_"+i)).css(g.compData.JS.radiobutton.JS.inactiveCSS)}angular.element(k).css(g.compData.JS.radiobutton.JS.activeCSS);g.compData.JS.selectedValue=g.compData.JS.dataset[g.index]};g.clickDisable=function(){};g.extendComponentData=function(j){g.compData=d.extendDeep(g.compData,j);b(function(){g.$apply()})};g.init=function(){h.registerComponentInstance(f.attr("cid"),g);g.extendComponentData(h.getInitProperties(g.cid))};g.setSelectionValue=function(j){if(g.compData.JS.selectionConfigRespPath){g.compData.JS.dataset=d.transfer(j,g.compData.JS.selectionConfigRespPath)}b(function(){g.$apply();g.changeState(0)})};g.eventMap.setSelectionValue=g.setSelectionValue;g.$on(g.cid+"_handleEvent",function(m,k,l,j){g.eventMap[k](l,j)})}],link:function(g,e,d,f){g.pageID=f.pageID;g.componentType="iradioselectiondiv";g.init()}}}]);
