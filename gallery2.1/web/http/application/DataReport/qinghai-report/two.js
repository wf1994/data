/**
 * Created by Linhao on 2015/01/21.
 */
define(function(require, exports, module) {
	var EchartsFactory = require("js/echarts/visualkization.tool.echarts.factory");
	var D3Factory = require("js/d3/visualkization.tool.d3.factory");

	// 图1
	var G_1 = (function() {
		var init = function() {
			eventBind(); // 事件绑定
			one(); // 默认指标1
		};
		var eventBind = function() {
			$("#g_1_btn >button").on("click", function() {
				var $this = $(this);
				var value = $this.attr("data-value");

				$this.parent().find(">button").removeClass("btn-success");
				$this.addClass("btn-success");

				switch (value) {
				case "1":
				case 1:
					one();
					break;
				case "2":
				case 2:
					two();
					break;
				default:
					break;
				}
			});
		};

		// 指标1
		var one = function() {
			var custom1 = {
				"width" : "48%",
				"height" : "400px",
				fontColor : "#121212",
				pieFontColor : "#121212",
				fontSize : 12,
				pieFontSize : 16
			};
			var dataroot1 = 'data/two/g_1_pie_one.json';
			EchartsFactory.make("g_1_pie", dataroot1, custom1, "pie");

			var custom2 = {
				"width" : "52%",
				"height" : "400px",
				fontSize : 12,
				show : false,
				color : "#E3B5AD",
				fontColor : "#121212",
				barBorderWidth : 1,
				barBorderColor : "#E3B5AD",
				barBorderRadius : [ 0, 7, 7, 0 ]
			};
			var dataroot2 = 'data/two/g_1_bar_one.json';
			EchartsFactory.make("g_1_bar", dataroot2, custom2, "bar");
		};

		// 指标2
		var two = function() {
			var custom1 = {
				"width" : "48%",
				"height" : "400px",
				fontColor : "#121212",
				pieFontColor : "#121212",
				fontSize : 12
			};
			var dataroot1 = 'data/two/g_1_pie_two.json';
			EchartsFactory.make("g_1_pie", dataroot1, custom1, "pie");

			var custom2 = {
				"width" : "52%",
				"height" : "400px",
				fontSize : 12,
				show : false,
				color : "#E3B5AD",
				fontColor : "#121212",
				barBorderWidth : 1,
				barBorderColor : "#E3B5AD",
				barBorderRadius : [ 0, 7, 7, 0 ]
			};
			var dataroot2 = 'data/two/g_1_bar_two.json';
			EchartsFactory.make("g_1_bar", dataroot2, custom2, "bar");
		};

		return {
			init : init
		};
	})();

	// 图2
	var G_2 = (function() {
		var init = function() {
			eventBind(); // 事件绑定
			one(); // 默认指标1
		};

		var eventBind = function() {
			$("#g_2_btn >button").on("click", function() {
				var $this = $(this);
				var value = $this.attr("data-value");

				$this.parent().find(">button").removeClass("btn-success");
				$this.addClass("btn-success");

				switch (value) {
				case "1":
				case 1:
					one();
					break;
				case "2":
				case 2:
					two();
					break;
				default:
					break;
				}
			});
		};

		// 指标1
		var one = function() {
			var custom1 = {
				width : "100%",
				height : "450px",
				fontWeight : "normal",
				fontColor : "#5F4D3F"
			};
			var dataroot1 = 'data/two/g_2_one.json';
			EchartsFactory.make("g_2", dataroot1, custom1, "scatter");
		};

		// 指标2
		var two = function() {
			var custom1 = {
				width : "100%",
				height : "450px",
				fontWeight : "normal",
				fontColor : "#5F4D3F"
			};
			var dataroot1 = 'data/two/g_2_two.json';
			EchartsFactory.make("g_2", dataroot1, custom1, "scatter");
		};

		return {
			init : init
		};
	})();

	// 图3
	var G_3 = (function() {
		var init = function() {
			one(); // 默认指标1
		};

		// 指标1
		var one = function() {
			var custom1 = {
				width : "100%",
				height : "500px",
				fontWeight : "normal",
				fontColor : "#5F4D3F"
			};
			var dataroot1 = 'data/two/g_3.json';
			EchartsFactory.make("g_3", dataroot1, custom1, "scatter");
		};

		return {
			init : init
		};
	})();

	/**
	 * // 图4 var G_4 = (function() { var init = function() { one(); // 默认指标1 }; //
	 * 指标1 var one = function() { var custom1 = { width : "100%", height :
	 * "500px", fontWeight : "normal", fontColor : "#5F4D3F" }; var dataroot1 =
	 * 'data/two/g_4.json'; EchartsFactory.make("g_4", dataroot1, custom1,
	 * "scatter"); };
	 * 
	 * return { init : init }; })();
	 */
	// 图5
	var G_5 = (function() {
		var init = function() {
			D3Factory.getInstance(D3Factory.D3.BAR.DRILL, function(obj) {
				$("#g_5_1").css({
					"margin-left" : "-170px"
				});
				var config = {
					containerId : "#g_5_1",
					url : "data/two/g_5_1.json",
					dataType : "data1",
					textWidth : 400, // 文字宽度
					w : 1105
				// 图宽度
				};
				obj.init(config);
				$("#g_5_1 svg").css({
					"width" : 1150
				});
			});
		};

		return {
			init : init
		};
	})();

	// 图6
	var G_6 = (function() {
		var init = function() {
			one(); // 默认指标1
		};

		// 指标1
		var one = function() {
			// 采矿业
			var custom1 = {
				"width" : "800px",
				"height" : "400px",
				color : "#121212",
				fontColor : "#121212",
				lineColmRetain : 2
			};
			var dataroot1 = 'data/two/g_6.json';
			EchartsFactory.make("g_6", dataroot1, custom1, "columnLine");
		};

		return {
			init : init
		};
	})();

	// 图7
	var G_7 = (function() {
		var init = function() {
			eventBind(); // 事件绑定
			one(); // 默认指标1
		};

		var eventBind = function() {
			$("#g_7_btn >button").on("click", function() {
				var $this = $(this);
				var value = $this.attr("data-value");

				$this.parent().find(">button").removeClass("btn-success");
				$this.addClass("btn-success");

				switch (value) {
				case "1":
				case 1:
					one();
					break;
				case "2":
				case 2:
					two();
					break;
				default:
					break;
				}
			});
		};

		// 指标1
		var one = function() {
			var custom1 = {
					"width" : "48%",
					"height" : "400px",
					fontColor : "#121212",
					pieFontColor : "#121212",
					fontSize : 12,
					pieFontSize : 16
			};
			var dataroot1 = 'data/two/g_7_pie_one.json';
			EchartsFactory.make("g_7_pie", dataroot1, custom1, "pie");

			var custom2 = {
				"width" : "52%",
				"height" : "400px",
				fontSize : 12,
				show : false,
				color : "#E3B5AD",
				fontColor : "#121212",
				barBorderWidth : 1,
				barBorderColor : "#E3B5AD",
				barBorderRadius : [ 0, 7, 7, 0 ]
			};
			var dataroot2 = 'data/two/g_7_bar_one.json';
			EchartsFactory.make("g_7_bar", dataroot2, custom2, "bar");
		};

		// 指标2
		var two = function() {
			var custom1 = {
				"width" : "48%",
				"height" : "400px",
				fontColor : "#121212",
				pieFontColor : "#121212",
				fontSize : 12,
				pieFontSize : 16
			};
			var dataroot1 = 'data/two/g_7_pie_two.json';
			EchartsFactory.make("g_7_pie", dataroot1, custom1, "pie");

			var custom2 = {
				"width" : "52%",
				"height" : "400px",
				fontSize : 12,
				show : false,
				color : "#E3B5AD",
				fontColor : "#121212",
				barBorderWidth : 1,
				barBorderColor : "#E3B5AD",
				barBorderRadius : [ 0, 7, 7, 0 ]
			};
			var dataroot2 = 'data/two/g_7_bar_two.json';
			EchartsFactory.make("g_7_bar", dataroot2, custom2, "bar");
		};

		return {
			init : init
		};
	})();

	// 图8
	var G_8 = (function() {
		var init = function() {
			eventBind(); // 事件绑定
			one(); // 默认指标1
		};

		var eventBind = function() {
			$("#g_8_btn >button").on("click", function() {
				var $this = $(this);
				var value = $this.attr("data-value");

				$this.parent().find(">button").removeClass("btn-success");
				$this.addClass("btn-success");

				switch (value) {
				case "1":
				case 1:
					one();
					break;
				case "2":
				case 2:
					two();
					break;
				default:
					break;
				}
			});
		};

		// 指标1
		var one = function() {
			var custom1 = {
				width : "100%",
				height : "400px",
				wrap : true,
				barBorderRadius : [ 7, 7, 0, 0 ],
				interval : 0,
				"barBorderWidth" : "1",
				"fontColor" : "#5F4D3F",
				"color" : "#BFD99A"
			};
			var dataroot1 = 'data/two/g_8_one.json';
			EchartsFactory.make("g_8", dataroot1, custom1, "column");
		};

		// 指标2
		var two = function() {
			var custom1 = {
				width : "100%",
				height : "400px",
				pieFontSize : 16,
				wrap : true,
				barBorderRadius : [ 7, 7, 0, 0 ],
				interval : 0,
				"barBorderWidth" : "1",
				"fontColor" : "#5F4D3F",
				"color" : "#BFD99A"
			};
			var dataroot1 = 'data/two/g_8_two.json';
			EchartsFactory.make("g_8", dataroot1, custom1, "column");
		};

		return {
			init : init
		};
	})();

	// 图9
	var G_9 = (function() {
		var init = function() {
			one(); // 默认指标1
		};

		// 指标1
		var one = function() {
			var custom1 = {
				width : "100%",
				height : "400px",
				wrap : true,
				barBorderRadius : [ 7, 7, 0, 0 ],
				interval : 0,
				"barBorderWidth" : "1",
				"fontColor" : "#5F4D3F",
				"color" : "#BFD99A"
			};
			var dataroot1 = 'data/two/g_9.json';
			EchartsFactory.make("g_9", dataroot1, custom1, "column");
		};

		return {
			init : init
		};
	})();

	/**
	 * 导航
	 */
	var Nav = (function() {

		var init = function() {
			// 绑定滚动条
			bindScroll();

			// 目录居中
			setDirToCenter();

			// 绑定目录点击
			bindDirEvent();

			// 绑定公报切换
			bindChangePageEvent();
		};

		/**
		 * 绑定滚动条
		 */
		var bindScroll = function() {
			/* 监听滚动条 */
			window.onscroll = function() {
				var t = document.documentElement.scrollTop
						|| document.body.scrollTop;
				if (t >= 300) {
					$("#top_div").fadeIn();
				} else {
					$("#top_div").fadeOut();
				}
			};

			// 点击出现导航条
			$(".change_label").click(function() {
				var value = $(".fix_index").attr("data-value");
				if (value == "false") {
					$(".fix_index").fadeIn();
					$(".fix_index").attr("data-value", "true");
					$(".return_hov").css("background-color", "#EEEEE0");
				} else {
					$(".fix_index").fadeOut();
					$(".fix_index").attr("data-value", "false");
					$(".return_hov").css("background-color", "#FFFFFF");
				}
			});

			// 点击回调顶部
			$("#top_div").click(function() {
				$("html,body").animate({
					scrollTop : 0
				}, 500);
			});
		};

		/**
		 * 设置目录居中
		 */
		var setDirToCenter = function() {
			var height_css = $(".fix_index").css("height");
			var height = parseInt(height_css);
			height = Math.round(height / 2);
			$(".fix_index").css("margin-top", "-" + height + "px");
		};

		/**
		 * 绑定目录点击
		 */
		var bindDirEvent = function() {

			// 目录-公报切换
			$(".book1 div[id^=page_]").on("click", function() {
				var $this = $(this);
				var id = $this.attr("id");

				var index = id.substr(id.indexOf("page_") + 5, id.length);

				switch (parseInt(index)) {
				case 1:
					window.location = "one.html";
					break;
				case 2:
					window.location = "two.html";
					break;
				case 3:
					window.location = "three.html";
					break;
				default:
					break;
				}
			});

			// 目录切换
			$("ul#dir-ul li").on("click", function() {
				var $li = $(this);
				var value = $li.attr("data-value");
				$("html,body").animate({
					scrollTop : $("#mari-" + value).offset().top
				}, 500);
			});
		};

		/**
		 * 绑定公报切换
		 */
		var bindChangePageEvent = function() {

			var curr = $("ul.pagination li.active").attr("data-value");
			var curr = parseInt(curr);
			if (curr == 1) {
				$("ul.pagination li.pre_page").remove(); // 没有前一页
			} else if (curr == 3) {
				$("ul.pagination li.next_page").remove(); // 没有下一页
			}

			// 绑定
			$("ul.pagination li").on("click", function() {
				var $this = $(this);
				var value = $this.attr("data-value");

				if (value == "pre")
					value = curr - 1;
				else if (value == "next")
					value = curr + 1;

				switch (value) {
				case "1":
				case 1:
					window.location = "one.html";
					break;
				case "2":
				case 2:
					window.location = "two.html";
					break;
				case "3":
				case 3:
					window.location = "three.html";
					break;
				default:
					break;
				}
			});
		};

		return {
			init : init
		};
	})();

	/**
	 * 公报二执行器
	 */
	var TwoHanlder = (function() {

		/**
		 * 公报二 总入口
		 */
		var init = function() {
			// 事件绑定
			eventBind();

			G_1.init(); // 图1
			G_2.init(); // 图2
			G_3.init(); // 图3
			// G_4.init(); // 图4
			G_5.init(); // 图5
			G_6.init(); // 图6
			G_7.init(); // 图7
			G_8.init(); // 图8
			G_9.init(); // 图9

			Nav.init(); // 导航
		};

		/**
		 * 事件绑定
		 */
		var eventBind = function() {
			$(".ui.button").on("click", function() {
				var $this = $(this);
				var $next = $this.next();

				var value = $this.attr("data-value");
				switch (value) {
				case "hide":
					$this.attr("data-value", "show");
					$this.text("隐藏数据");
					break;
				case "show":
					$this.attr("data-value", "hide");
					$this.text("显示数据");
					break;
				default:
					break;
				}

				$next.toggle();
			});
		};

		return {
			init : init
		};
	})();

	TwoHanlder.init(); // 执行
});