(function () {
        function navFixed() {
            //默认为传入的第一个对象
            var $this = arguments[0].length ? arguments[0][0] : arguments[0],
                //导航的上一个兄弟节点
                $prev = $this.previousElementSibling,
                //导航的下一个兄弟节点
                $next = $this.nextElementSibling,
                //导航的上一个兄弟节点的margin-bottom
                $prev_marginBottom = parseInt(_compatible_style($prev).marginBottom) || 0,
                //导航的下一个兄弟节点的margin-top
                $next_marginTop = parseInt(_compatible_style($next).marginTop) || 0,

                //导航盒子高度
                $height = parseInt(_compatible_style($this).height) || 0,
                //导航盒子borderTop
                $borderTop = parseInt(_compatible_style($this).borderTop || _compatible_style($this).borderTopWidth) || 0,
                //导航盒子borderBottom
                $borderBottom = parseInt(_compatible_style($this).borderBottom || _compatible_style($this).borderBottomWidth) || 0,
                //导航盒子marginBottom
                $marginBottom = parseInt(_compatible_style($this).marginBottom) || 0,
                //导航盒子marginTop
                $marginTop = parseInt(_compatible_style($this).marginTop) || 0,
                //导航盒子高度(包括border,margin)
                $outerHeight = $height + $borderTop + $borderBottom + $marginTop + $marginBottom,

                //获取导航顶部距离浏览器工作区顶端的距离
                $_navPosition = $this.offsetTop - $marginTop,
                //获取页面滚动的距离
                $_topPosition = _topPosition();

            //获取页面滚动的距离
            function _topPosition() {
                //兼容
                return document.body.scrollTop + document.documentElement.scrollTop;
            }

            //获取节点属性
            function _compatible_style() {
                var $this_style = arguments[0];
                //兼容
                if (document.documentElement.currentStyle) {
                    return $this_style.currentStyle;
                } else {
                    return document.defaultView.getComputedStyle($this_style);
                }
            }

            //通用监听
            function addEvent(element, type, handler) {
                if (element.addEventListener) {
                    element.addEventListener(type, handler, false);
                } else if (element.attachEvent) {
                    element.attachEvent('on' + type, function () {
                        handler.call(element);
                    });
                } else {
                    element['on' + type] = handler;
                }
            }

            //监听滚动事件
            addEvent(window, 'scroll', function () {
                $_topPosition = _topPosition();
                judgment();
            });

            //判断滚动距离是否大于导航距浏览器顶部距离
            function judgment() {
                if ($_topPosition >= $_navPosition) {
                    $this.style.position = 'fixed';
                    $this.style.top = 0;
                    //下一个兄弟节点加上导航消失的距离
                    $next.style.marginTop = $prev_marginBottom + $outerHeight + $next_marginTop + 'px';
                } else {
                    $this.style.position = 'relative';
                    $next.style.marginTop = $next_marginTop + 'px';
                }
            }
        }

        //提供对外接口
        window.navFixed = navFixed;
    }()
);