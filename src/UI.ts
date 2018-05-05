import Vue from 'vue'
import Icon from 'element-ui/lib/icon.js';
import Button from 'element-ui/lib/button.js';
import Dialog from 'element-ui/lib/dialog.js';
import Popover from 'element-ui/lib/popover.js';
import Pagination from 'element-ui/lib/pagination.js';
import Breadcrumb from 'element-ui/lib/breadcrumb.js';
import BreadcrumbItem from 'element-ui/lib/breadcrumb-item.js';
import Tabs from 'element-ui/lib/tabs.js';
import TabPane from 'element-ui/lib/tab-pane.js';
import Tree from 'element-ui/lib/tree.js';
import ToolTip from 'element-ui/lib/tooltip.js';

Vue.use(Icon);
Vue.use(Dialog);
Vue.use(Button);
Vue.use(Popover);
Vue.use(Pagination);
Vue.use(Tree);
Vue.use(ToolTip);
// 面包屑
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
// 标签页
Vue.use(Tabs);
Vue.use(TabPane);
