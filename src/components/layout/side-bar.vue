
<template>
  <!-- sidebar-fixed -->
  <nav class="sidebar sidebar-offcanvas" id="sidebar">
        <ul class="nav">
          <li class="nav-item nav-profile">
            <div class="nav-link">
              <div class="user-wrapper">
                <div class="profile-image">
                  <img src="../../assets/images/faces/face1.jpg" alt="profile image">
                </div>
                <div class="text-wrapper">
                  <p class="profile-name">令狐冲</p>
                  <div>
                    <small class="designation text-muted">超级管理员</small>
                    <span class="status-indicator online"></span>
                  </div>
                </div>
              </div>
              <!-- <button class="btn btn-success btn-block">新增项目
                <i class="mdi mdi-plus"></i>
              </button> -->
            </div>
          </li>
          <li class="nav-item">
              <router-link  class="nav-link" to="/">
                  <i class="menu-icon mdi mdi-television"></i>
                  <span class="menu-title">首页</span>
              </router-link>  
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#ui-basic" aria-expanded="false" aria-controls="ui-basic">
              <i class="menu-icon mdi mdi-content-copy"></i>
              <span class="menu-title">基本UI元素</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="ui-basic">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                 <router-link  class="nav-link" to="/ui/button">按钮</router-link>  
                </li>
                <li class="nav-item">
                 <router-link  class="nav-link" to="/ui/typography">文本</router-link>  
                </li>
              </ul>
            </div>
          </li>
          <li class="nav-item">
            <router-link  class="nav-link" to="/form/index">
              <i class="menu-icon mdi mdi-backup-restore"></i>
              <span class="menu-title">表单元素</span>
            </router-link>  
          </li>
          <li class="nav-item">
            
            <router-link  class="nav-link" to="/chart/index">
              <i class="menu-icon mdi mdi-chart-line"></i>
              <span class="menu-title">图表</span>
            </router-link >
          </li>
          <li class="nav-item">
            <router-link  class="nav-link" to="/table/index">
              <i class="menu-icon mdi mdi-table"></i>
              <span class="menu-title">表格</span>
            </router-link >
  
          </li>
          <li class="nav-item">
            <router-link  class="nav-link" to="/icons/index">
              <i class="menu-icon mdi mdi-sticker"></i>
              <span class="menu-title">图标</span>
            </router-link >
          </li>
          <li class="nav-item">
            <a class="nav-link" data-toggle="collapse" href="#auth" aria-expanded="false" aria-controls="auth">
              <i class="menu-icon mdi mdi-restart"></i>
              <span class="menu-title">常用页面</span>
              <i class="menu-arrow"></i>
            </a>
            <div class="collapse" id="auth">
              <ul class="nav flex-column sub-menu">
                <li class="nav-item">
                  <router-link  class="nav-link" to="/login"> 登陆页 </router-link >
                </li>
                <li class="nav-item">
                  <router-link  class="nav-link" to="/register"> 注册页面 </router-link >
                </li>
                <li class="nav-item">
                  <router-link  class="nav-link" to="/404"> 404 </router-link >
                </li>
                <li class="nav-item">
                  <router-link  class="nav-link" to="/500"> 500 </router-link >
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </nav>
</template>
