
<!DOCTYPE html> 
<html lang="en" dir="ltr">
  <head>
    <meta charset="UTF-8">
    <title> Responsive Sidebar Menu  | Code4education </title>
    <link rel="stylesheet" href="style1.css">
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet'>
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
   </head>
<body>
   <div class="sidebar">
     <div class="logo_content">
       <div class="logo">
         <div class="logo_name">Code4education</div>
       </div>
       <i class='bx bx-menu' id="btn"></i>
     </div>
     <ul class="nav_list">
       <li>
          <i class='bx bx-search'></i>
          <input type="text" placeholder="Search...">
          <span class="tooltip">Search</span>
       </li>
       <li>
        <a href="#">
         <i class='bx bx-grid-alt'></i>
         <span class="links_name">Dashboard</span>
        </a>
        <span class="tooltip">Dashboard</span>
      </li>
       <li>
         <a href="#">
          <i class='bx bx-user'></i>
          <span class="links_name">User</span>
         </a>
         <span class="tooltip">User</span>
       </li>
       <li>
        <a href="#">
         <i class='bx bx-chat'></i>
         <span class="links_name">Messages</span>
        </a>
        <span class="tooltip">Messages</span>
      </li>
      <li>
        <a href="#">
         <i class='bx bx-pie-chart-alt-2'></i>
         <span class="links_name">Analytics</span>
        </a>
        <span class="tooltip">Analytics</span>
      </li>
      <li>
        <a href="#">
         <i class='bx bx-folder'></i>
         <span class="links_name">File Manager</span>
        </a>
        <span class="tooltip">File Manager</span>
      </li>
      <li>
        <a href="#">
         <i class='bx bx-cart-alt'></i>
         <span class="links_name">Order</span>
        </a>
        <span class="tooltip">Order</span>
      </li>
      <li>
        <a href="#">
         <i class='bx bx-heart'></i>
         <span class="links_name">Saved</span>
        </a>
        <span class="tooltip">Saved</span>
      </li>
      <li>
        <a href="#">
         <i class='bx bx-cog'></i>
         <span class="links_name">Setting</span>
        </a>
        <span class="tooltip">Setting</span>
      </li>
     </ul>
     <div class="content">
       <div class="user">
         <div class="user_details">
           
           <div class="name_job">
             <div class="name"></div>
             <div><span id="result"></span></div>
             <div class="job">
              <div>
              <p id="demo1"></p><p id="demo2"></p></div>
              <script>
                document.getElementById('demo1').innerHTML=window.localStorage.getItem('firstname');
               document.getElementById('demo2').innerHTML=window.localStorage.getItem('lastname');
             
            </script>
          </div>
           </div>
         </div>
         <i class='bx bx-log-out log_out' id="logbtn"  onclick="return logout()"></i>
       </div>

     </div>
   </div>
   </div>

<script src="main.js">
</script>
</body>
</html>

