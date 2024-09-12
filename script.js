<script>
        // الحصول على جميع القوائم الفرعية
        document.querySelectorAll('.dropdown-submenu > a').forEach(item => {
            item.addEventListener('click', function(event) {
                event.preventDefault();
                
                // إخفاء جميع القوائم الفرعية
                let submenus = document.querySelectorAll('.dropdown-submenu > ul');
                submenus.forEach(submenu => {
                    submenu.style.display = 'none';
                });

                // إظهار القائمة الفرعية المرتبطة بالرابط الذي تم النقر عليه
                let nextSubMenu = this.nextElementSibling;
                if (nextSubMenu && nextSubMenu.style.display !== 'block') {
                    nextSubMenu.style.display = 'block';
                }
            });
        });

        // إغلاق القائمة الفرعية عند النقر في أي مكان آخر في الصفحة
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.dropdown-submenu')) {
                let submenus = document.querySelectorAll('.dropdown-submenu > ul');
                submenus.forEach(submenu => {
                    submenu.style.display = 'none';
                });
            }
        });
    </script>
