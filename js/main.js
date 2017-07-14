/*
* @Author: cathy.chen
* @Date:   2017-07-14 15:36:37
* @Last Modified by:   cathy.chen
* @Last Modified time: 2017-07-14 16:26:11
*/
$(function(){
'use strict';
$('#fullPage').fullpage({
        verticalCentered: false,
        anchors: ['page1','page2','page3','page4'],
        navigation: true,
        navigationTooltips: ['它，終於來了','真正與你貼近的個人設備','非同一般的精准計時','在三個特點鮮明的系列中找到你的風格'],
        afterLoad: function(link, index){
            switch (index){
                case 1:
                    move('.section1 h1').scale(1.5).end();
                    move('.section1 p').set('margin-top','5%').end();
                    break;
                case 2:
                    move('.section2 h1').scale(0.7).end();
                    break;
                case 3:
                    move('.section3 h1').set('margin-left','20%').end();
                    move('.section3 p').set('margin-left','20%').end();
                    break;
                case 4:
                    move('.section4 img.primary').rotate(360).end(function(){
                        move('.section4 img.sport').rotate(360).end(function(){
                            move('.section4 img.edition').rotate(360).end(function(){
                                move('.section4 h4.primary').scale(1.2).end(function(){
                                    move('.section4 h4.sport').scale(1.2).end(function(){
                                        move('.section4 h4.edition').scale(1.2).end();
                                    });
                                });
                            });
                        });
                    });
                    break;
                default :
                    break;
            }
        },
        onLeave: function(link, index){
            switch (index){
                case 1:
                    move('.section1 h1').scale(1).end();
                    move('.section1 p').set('margin-top','800px').end();
                    break;
                case 2:
                    move('.section2 h1').scale(1).end();
                    break;
                case 3:
                    move('.section3 h1').set('margin-left','-1500px').end();
                    move('.section3 p').set('margin-left','1500px').end();
                    break;
                case 4:
                    move('.section4 img.primary').rotate(-360).end();
                    move('.section4 img.sport').rotate(-360).end();
                    move('.section4 img.edition').rotate(-360).end();
                    move('.section4 h4.primary').scale(1).end();
                    move('.section4 h4.sport').scale(1).end();
                    move('.section4 h4.edition').scale(1).end();
                    break;
                default :
                    break;
            }
        },
    })

})