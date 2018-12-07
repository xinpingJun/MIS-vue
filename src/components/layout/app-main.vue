<template>
<div class="container-scroller">
  <!-- partial:partials/_navbar.html -->
  <nav-bar></nav-bar>
  <!-- partial -->
  <div class="container-fluid page-body-wrapper">
    <!-- partial:partials/_sidebar.html -->
    <side-bar></side-bar>
    <!-- partial -->
    <div class="main-panel">
      <router-view></router-view>
      <!-- <div class="content-wrapper">
        
      </div> -->
      <!-- partial:partials/_footer.html -->
      <footer-bar></footer-bar>
      <!-- partial -->
    </div>
    <!-- main-panel ends -->
  </div>
  <!-- page-body-wrapper ends -->
</div>
</template>
<script>
import FooterBar from './footer-bar';
import NavBar from './nav-bar';
import SideBar from './side-bar';
export default {
  components: {
    FooterBar,
    NavBar,
    SideBar
  },
  mounted() {

    (function($) {
      'use strict';
      $(function() {
        $('[data-toggle="offcanvas"]').on("click", function() {
          $('.sidebar-offcanvas').toggleClass('active')
        });
        $('[data-toggle="minimize"]').on("click", function() {
          $('body').toggleClass('sidebar-icon-only')
        });
      });
    })(jQuery);
    (function($) {
      'use strict';
      //Open submenu on hover in compact sidebar mode and horizontal menu mode
      $(document).on('mouseenter mouseleave', '.sidebar .nav-item', function(ev) {
        var body = $('body');
        var sidebarIconOnly = body.hasClass("sidebar-icon-only");
        var horizontalMenu = body.hasClass("horizontal-menu");
        var sidebarFixed = body.hasClass("sidebar-fixed");
        var $menuItem = $(this);
        if (!('ontouchstart' in document.documentElement)) {
          if (sidebarIconOnly || horizontalMenu) {
            if (sidebarFixed) {
              if (ev.type === 'mouseenter') {
                body.removeClass('sidebar-icon-only');
              }
            } else {
              if (ev.type === 'mouseenter') {
                $menuItem.addClass('hover-open')
              } else {
                $menuItem.removeClass('hover-open')
              }
            }
          }
        } else {
          if (sidebarIconOnly || horizontalMenu) {
            if (ev.type === 'mouseenter') {
              $menuItem.addClass('hover-open')
            } else {
              $menuItem.removeClass('hover-open')
            }
          }
        }
      });

    })(jQuery);

  }
}
</script>
