      // window.onload = function () {
      //   var cnt = document.getElementsByClassName("tablinks").length;
      //   function start(counter) {
      //     if (counter < cnt) {
      //       setTimeout(function () {
      //         counter++;
      //         openCity2(MouseEvent, "tab" + counter, counter); //Industries Auto Click
      //         start(counter);
      //       }, 2000);
      //     }
      //     if (counter == cnt) {
      //       start(0);
      //     }
      //   }


      //   start(0);
      //   //bannerstart(); //Enable Slide Auto

      //   function openCity2(evt, cityName, cityno) {
      //     var i, tabcontent, tablinks;
      //     tabcontent = document.getElementsByClassName("tabcontent");
      //     for (i = 0; i < tabcontent.length; i++) {
      //       tabcontent[i].style.display = "none";
      //     }
      //     tablinks = document.getElementsByClassName("tablinks");
      //     for (i = 0; i < tablinks.length; i++) {
      //       tablinks[i].className = tablinks[i].className.replace(
      //         " active",
      //         ""
      //       );
      //       if (i == cityno - 1) {
      //         tablinks[i].className += " active";
      //       }
      //     }
      //     document.getElementById(cityName).style.display = "block";
      //   }

      //   $(function(){
      //     if($(window).width() >= 768){
      //         $("section").SnapScroll();
      //       }
      //     });
      // };


      // function openCity(evt, cityName) {
      //   var i, tabcontent, tablinks;
      //   tabcontent = document.getElementsByClassName("tabcontent");
      //   for (i = 0; i < tabcontent.length; i++) {
      //     tabcontent[i].style.display = "none";
      //   }
      //   tablinks = document.getElementsByClassName("tablinks");
      //   for (i = 0; i < tablinks.length; i++) {
      //     tablinks[i].className = tablinks[i].className.replace(" active", "");
      //   }
      //   document.getElementById(cityName).style.display = "block";
      //   evt.currentTarget.className += " active";
      // }


      $(document).ready(function() {
          $('[data-toggle=dropdown]').on('click', function(event) {
              event.preventDefault();
              event.stopPropagation();
              $(this).parent().siblings().removeClass('open');
              $(this).parent().toggleClass('open');
          });
          $('.open').on('hide.bs.dropdown', function(e) {
              e.preventDefault();
          });
      });

      $('a[href="#searchhh"]').on('click', function(event) {
          event.preventDefault();
          $('#searchhh').addClass('open');
          $('#searchhh > form > input[type="searchhh"]').focus();
      });

      $('#searchhh, #searchhh button.close').on('click keyup', function(event) {
          if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
              $(this).removeClass('open');
          }
      });


      //Do not include! This prevents the form from submitting for DEMO purposes only!
      $('form').submit(function(event) {
          event.preventDefault();
          return false;
      })


      $(document).ready(function() {
          $('.fa-caret-down').on('click', function() {
              if ($(this).hasClass('fa-caret-down')) {
                  $(this).removeClass('fa-caret-down').addClass('fa-caret-up');
              } else {
                  $(this).removeClass('fa-caret-up').addClass('fa-caret-down');
              }
          });
      });

      $("#toTop").click(function() {
          $("html, body").animate({
              scrollTop: 0
          }, 1000);
      });

      $('#toTop').hide();

      $(window).scroll(function() {
          if ($(this).scrollTop() > 250 && $(this).scrollTop() < 3000) {
              $('#toTop').fadeIn();
          } else {
              $('#toTop').fadeOut();
          }
      });

      // default bootstrap click, apenas muda com ação do utilizador
      //$('#myTab a').click(function (e) {
      //  e.preventDefault()
      //  $(this).tab('show')
      //})

      // Tab-Pane change function
      var tabChange = function() {
          var tabs = $('.tabs-slider > li');
          var active = tabs.filter('.active');
          var next = active.next('li').length ? active.next('li').find('a') : tabs.filter(':first-child').find('a');
          // Bootsrap tab show, para ativar a tab
          next.tab('show')
      }
      // Tab Cycle function
      var tabCycle = setInterval(tabChange, 10000)
      // Tab click event handler
      $(function() {
          $('.tabs-slider a').click(function(e) {
              e.preventDefault();
              // Parar o loop
              clearInterval(tabCycle);
              // mosta o tab clicado, default bootstrap
              $(this).tab('show')
              // Inicia o ciclo outra vez
              setTimeout(function() {
                  tabCycle = setInterval(tabChange, 10000) //quando recomeça assume este timing
              }, 10000);
          });
      });

      $(document).ready(function() {
          $(window).scroll(function() {
              var h = $(window).height();
              var scrollTop = $(window).scrollTop();
              if (scrollTop > 100) {
                  $('.header').addClass('sticky');
              } else {
                  $('.header').removeClass('sticky');
              }
          })
      })

      $(document).ready(function() {
          $("a.smooth").click(function() {
              $("html, body").animate({
                  scrollTop: $($(this).attr("href")).offset().top - 86
              }, {
                  duration: 1800
              });
              return false;
          });
      });
