<template>
    <div class="userOrders">
        <el-tabs v-model="activeTag" type="card" @tab-click="handleClick">
            <el-tab-pane label="全部订单" name="first">
                <div class="temp-content">
                    <el-row>
                        <el-col :span="12" >
                            <div class="grid-content bg-purple order-frame">
                                <div class="content-title">
                                    <img src="../../assets/img/carousel/carousel2.jpg" />
                                    <span class="mini-info info-success">报名成功</span><span>|</span>
                                    <span class="mini-info info-null" @click="cancelClass">取消选课</span>
                                </div>
                                <div class="content-body">
                                    <h3>&nbsp;全套Java编程完整版教程&nbsp;</h3>
                                    <span class="mini-info info-null">免费</span><span>|</span>
                                    <span class="mini-info info-normal">已更新10集/共20集</span>
                                    <p>
                                        <el-tag class="min-tag" size="small">CSS</el-tag>
                                        <el-tag class="min-tag" size="small">Java</el-tag>
                                        <el-tag class="min-tag" size="small">html</el-tag>
                                        <el-tag class="min-tag" size="small">web</el-tag>
                                        <el-tag class="min-tag" size="small">大数据</el-tag>
                                    </p> 
                                </div> 
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple order-frame">
                                <div class="content-title">
                                    <img src="../../assets/img/carousel/carousel2.jpg" />
                                    <span class="mini-info info-success">报名成功</span><span>|</span>
                                    <span class="mini-info info-null" @click="cancelClass">取消选课</span>
                                </div>
                                <div class="content-body">
                                    <h3>&nbsp;全套Java编程完整版教程&nbsp;</h3>
                                    <span class="mini-info info-null">免费</span><span>|</span>
                                    <span class="mini-info info-normal">已更新10集/共20集</span>
                                    <p>
                                        <el-tag class="min-tag" size="small">CSS</el-tag>
                                        <el-tag class="min-tag" size="small">Java</el-tag>
                                        <el-tag class="min-tag" size="small">html</el-tag>
                                        <el-tag class="min-tag" size="small">web</el-tag>
                                        <el-tag class="min-tag" size="small">大数据</el-tag>
                                    </p> 
                                </div> 
                                
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple order-frame">
                                <div class="content-title">
                                    <img src="../../assets/img/carousel/carousel2.jpg" />
                                    <span class="mini-info info-success">报名成功</span><span>|</span>
                                    <span class="mini-info info-null" @click="cancelClass">取消选课</span>
                                </div>
                                <div class="content-body">
                                    <h3>&nbsp;全套Java编程完整版教程&nbsp;</h3>
                                    <span class="mini-info info-null">免费</span><span>|</span>
                                    <span class="mini-info info-normal">已更新10集/共20集</span>
                                    <p>
                                        <el-tag class="min-tag" size="small">CSS</el-tag>
                                        <el-tag class="min-tag" size="small">Java</el-tag>
                                        <el-tag class="min-tag" size="small">html</el-tag>
                                        <el-tag class="min-tag" size="small">web</el-tag>
                                        <el-tag class="min-tag" size="small">大数据</el-tag>
                                    </p> 
                                </div> 
                                
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple order-frame">
                                <div class="content-title">
                                    <img src="../../assets/img/carousel/carousel2.jpg" />
                                    <span class="mini-info info-success">报名成功</span><span>|</span>
                                    <span class="mini-info info-null" @click="cancelClass">取消选课</span>
                                </div>
                                <div class="content-body">
                                    <h3>&nbsp;全套Java编程完整版教程&nbsp;</h3>
                                    <span class="mini-info info-null">免费</span><span>|</span>
                                    <span class="mini-info info-normal">已更新10集/共20集</span>
                                    <p>
                                        <el-tag class="min-tag" size="small">CSS</el-tag>
                                        <el-tag class="min-tag" size="small">Java</el-tag>
                                        <el-tag class="min-tag" size="small">html</el-tag>
                                        <el-tag class="min-tag" size="small">web</el-tag>
                                        <el-tag class="min-tag" size="small">大数据</el-tag>
                                    </p> 
                                </div> 
                                
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple order-frame">
                                <div class="content-title">
                                    <img src="../../assets/img/carousel/carousel2.jpg" />
                                    <span class="mini-info info-success">待付课程</span><span>|</span>
                                    <span class="mini-info info-null"  @click="cancelClass">取消订单</span>
                                </div>
                                <div class="content-body">
                                    <h3>&nbsp;全套Java编程完整版教程&nbsp;</h3>
                                    <span class="mini-info info-null">免费</span><span>|</span>
                                    <span class="mini-info info-normal">已更新10集/共20集</span>
                                    <p>
                                        <el-tag class="min-tag" size="small">CSS</el-tag>
                                        <el-tag class="min-tag" size="small">Java</el-tag>
                                        <el-tag class="min-tag" size="small">html</el-tag>
                                        <el-tag class="min-tag" size="small">web</el-tag>
                                        <el-tag class="min-tag" size="small">大数据</el-tag>
                                    </p> 
                                </div> 
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple order-frame">
                                <div class="content-title">
                                    <img src="../../assets/img/carousel/carousel2.jpg" />
                                    <span class="mini-info info-success">待付课程</span><span>|</span>
                                    <span class="mini-info info-null" @click="cancelClass">取消订单</span>
                                </div>
                                <div class="content-body">
                                    <h3>&nbsp;全套Java编程完整版教程&nbsp;</h3>
                                    <span class="mini-info info-null">免费</span><span>|</span>
                                    <span class="mini-info info-normal">已更新10集/共20集</span>
                                    <p>
                                        <el-tag class="min-tag" size="small">CSS</el-tag>
                                        <el-tag class="min-tag" size="small">Java</el-tag>
                                        <el-tag class="min-tag" size="small">html</el-tag>
                                        <el-tag class="min-tag" size="small">web</el-tag>
                                        <el-tag class="min-tag" size="small">大数据</el-tag>
                                    </p> 
                                </div> 
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple order-frame">
                                <div class="content-title">
                                    <img src="../../assets/img/carousel/carousel2.jpg" />
                                    <span class="mini-info info-success">重新报名</span><span>|</span>
                                    <span class="mini-info info-normal">已取消</span>
                                </div>
                                <div class="content-body">
                                    <h3>&nbsp;全套Java编程完整版教程&nbsp;</h3>
                                    <span class="mini-info info-null">免费</span><span>|</span>
                                    <span class="mini-info info-normal">已更新10集/共20集</span>
                                    <p>
                                        <el-tag class="min-tag" size="small">CSS</el-tag>
                                        <el-tag class="min-tag" size="small">Java</el-tag>
                                        <el-tag class="min-tag" size="small">html</el-tag>
                                        <el-tag class="min-tag" size="small">web</el-tag>
                                        <el-tag class="min-tag" size="small">大数据</el-tag>
                                    </p> 
                                </div> 
                                
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple order-frame">
                                <div class="content-title">
                                    <img src="../../assets/img/carousel/carousel2.jpg" />
                                    <span class="mini-info info-success">重新报名</span><span>|</span>
                                    <span class="mini-info info-normal">已取消</span>
                                </div>
                                <div class="content-body">
                                    <h3>&nbsp;全套Java编程完整版教程&nbsp;</h3>
                                    <span class="mini-info info-null">免费</span><span>|</span>
                                    <span class="mini-info info-normal">已更新10集/共20集</span>
                                    <p>
                                        <el-tag class="min-tag" size="small">CSS</el-tag>
                                        <el-tag class="min-tag" size="small">Java</el-tag>
                                        <el-tag class="min-tag" size="small">html</el-tag>
                                        <el-tag class="min-tag" size="small">web</el-tag>
                                        <el-tag class="min-tag" size="small">大数据</el-tag>
                                    </p> 
                                </div> 
                                
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="temp-footer">
                    <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="50">
                    </el-pagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="报名成功" name="second">
                <div class="temp-content">
                    <el-row>
                        <el-col :span="12" >
                            <div class="grid-content bg-purple order-frame">
                                <div class="content-title">
                                    <img src="../../assets/img/carousel/carousel2.jpg" />
                                    <span class="mini-info info-success">报名成功</span><span>|</span>
                                    <span class="mini-info info-null" @click="cancelClass">取消选课</span>
                                </div>
                                <div class="content-body">
                                    <h3>&nbsp;全套Java编程完整版教程&nbsp;</h3>
                                    <span class="mini-info info-null">免费</span><span>|</span>
                                    <span class="mini-info info-normal">已更新10集/共20集</span>
                                    <p>
                                        <el-tag class="min-tag" size="small">CSS</el-tag>
                                        <el-tag class="min-tag" size="small">Java</el-tag>
                                        <el-tag class="min-tag" size="small">html</el-tag>
                                        <el-tag class="min-tag" size="small">web</el-tag>
                                        <el-tag class="min-tag" size="small">大数据</el-tag>
                                    </p> 
                                </div> 
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple order-frame">
                                <div class="content-title">
                                    <img src="../../assets/img/carousel/carousel2.jpg" />
                                    <span class="mini-info info-success">报名成功</span><span>|</span>
                                    <span class="mini-info info-null" @click="cancelClass">取消选课</span>
                                </div>
                                <div class="content-body">
                                    <h3>&nbsp;全套Java编程完整版教程&nbsp;</h3>
                                    <span class="mini-info info-null">免费</span><span>|</span>
                                    <span class="mini-info info-normal">已更新10集/共20集</span>
                                    <p>
                                        <el-tag class="min-tag" size="small">CSS</el-tag>
                                        <el-tag class="min-tag" size="small">Java</el-tag>
                                        <el-tag class="min-tag" size="small">html</el-tag>
                                        <el-tag class="min-tag" size="small">web</el-tag>
                                        <el-tag class="min-tag" size="small">大数据</el-tag>
                                    </p> 
                                </div> 
                                
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple order-frame">
                                <div class="content-title">
                                    <img src="../../assets/img/carousel/carousel2.jpg" />
                                    <span class="mini-info info-success">报名成功</span><span>|</span>
                                    <span class="mini-info info-null" @click="cancelClass">取消选课</span>
                                </div>
                                <div class="content-body">
                                    <h3>&nbsp;全套Java编程完整版教程&nbsp;</h3>
                                    <span class="mini-info info-null">免费</span><span>|</span>
                                    <span class="mini-info info-normal">已更新10集/共20集</span>
                                    <p>
                                        <el-tag class="min-tag" size="small">CSS</el-tag>
                                        <el-tag class="min-tag" size="small">Java</el-tag>
                                        <el-tag class="min-tag" size="small">html</el-tag>
                                        <el-tag class="min-tag" size="small">web</el-tag>
                                        <el-tag class="min-tag" size="small">大数据</el-tag>
                                    </p> 
                                </div> 
                                
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple order-frame">
                                <div class="content-title">
                                    <img src="../../assets/img/carousel/carousel2.jpg" />
                                    <span class="mini-info info-success">报名成功</span><span>|</span>
                                    <span class="mini-info info-null" @click="cancelClass">取消选课</span>
                                </div>
                                <div class="content-body">
                                    <h3>&nbsp;全套Java编程完整版教程&nbsp;</h3>
                                    <span class="mini-info info-null">免费</span><span>|</span>
                                    <span class="mini-info info-normal">已更新10集/共20集</span>
                                    <p>
                                        <el-tag class="min-tag" size="small">CSS</el-tag>
                                        <el-tag class="min-tag" size="small">Java</el-tag>
                                        <el-tag class="min-tag" size="small">html</el-tag>
                                        <el-tag class="min-tag" size="small">web</el-tag>
                                        <el-tag class="min-tag" size="small">大数据</el-tag>
                                    </p> 
                                </div> 
                                
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="temp-footer">
                    <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="50">
                    </el-pagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="待付课程" name="third">
                <div class="temp-content">
                    <el-row>
                        <el-col :span="12">
                            <div class="grid-content bg-purple order-frame">
                                <div class="content-title">
                                    <img src="../../assets/img/carousel/carousel2.jpg" />
                                    <span class="mini-info info-success">待付课程</span><span>|</span>
                                    <span class="mini-info info-null"  @click="cancelClass">取消订单</span>
                                </div>
                                <div class="content-body">
                                    <h3>&nbsp;全套Java编程完整版教程&nbsp;</h3>
                                    <span class="mini-info info-null">免费</span><span>|</span>
                                    <span class="mini-info info-normal">已更新10集/共20集</span>
                                    <p>
                                        <el-tag class="min-tag" size="small">CSS</el-tag>
                                        <el-tag class="min-tag" size="small">Java</el-tag>
                                        <el-tag class="min-tag" size="small">html</el-tag>
                                        <el-tag class="min-tag" size="small">web</el-tag>
                                        <el-tag class="min-tag" size="small">大数据</el-tag>
                                    </p> 
                                </div> 
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple order-frame">
                                <div class="content-title">
                                    <img src="../../assets/img/carousel/carousel2.jpg" />
                                    <span class="mini-info info-success">待付课程</span><span>|</span>
                                    <span class="mini-info info-null" @click="cancelClass">取消订单</span>
                                </div>
                                <div class="content-body">
                                    <h3>&nbsp;全套Java编程完整版教程&nbsp;</h3>
                                    <span class="mini-info info-null">免费</span><span>|</span>
                                    <span class="mini-info info-normal">已更新10集/共20集</span>
                                    <p>
                                        <el-tag class="min-tag" size="small">CSS</el-tag>
                                        <el-tag class="min-tag" size="small">Java</el-tag>
                                        <el-tag class="min-tag" size="small">html</el-tag>
                                        <el-tag class="min-tag" size="small">web</el-tag>
                                        <el-tag class="min-tag" size="small">大数据</el-tag>
                                    </p> 
                                </div> 
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="temp-footer">
                    <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="50">
                    </el-pagination>
                </div>
            </el-tab-pane>
            <el-tab-pane label="取消报名" name="fourth">
                <div class="temp-content">
                    <el-row>
                        <el-col :span="12">
                            <div class="grid-content bg-purple order-frame">
                                <div class="content-title">
                                    <img src="../../assets/img/carousel/carousel2.jpg" />
                                    <span class="mini-info info-success">重新报名</span><span>|</span>
                                    <span class="mini-info info-normal">已取消</span>
                                </div>
                                <div class="content-body">
                                    <h3>&nbsp;全套Java编程完整版教程&nbsp;</h3>
                                    <span class="mini-info info-null">免费</span><span>|</span>
                                    <span class="mini-info info-normal">已更新10集/共20集</span>
                                    <p>
                                        <el-tag class="min-tag" size="small">CSS</el-tag>
                                        <el-tag class="min-tag" size="small">Java</el-tag>
                                        <el-tag class="min-tag" size="small">html</el-tag>
                                        <el-tag class="min-tag" size="small">web</el-tag>
                                        <el-tag class="min-tag" size="small">大数据</el-tag>
                                    </p> 
                                </div> 
                            </div>
                        </el-col>
                        <el-col :span="12">
                            <div class="grid-content bg-purple order-frame">
                                <div class="content-title">
                                    <img src="../../assets/img/carousel/carousel2.jpg" />
                                    <span class="mini-info info-success">重新报名</span><span>|</span>
                                    <span class="mini-info info-normal">已取消</span>
                                </div>
                                <div class="content-body">
                                    <h3>&nbsp;全套Java编程完整版教程&nbsp;</h3>
                                    <span class="mini-info info-null">免费</span><span>|</span>
                                    <span class="mini-info info-normal">已更新10集/共20集</span>
                                    <p>
                                        <el-tag class="min-tag" size="small">CSS</el-tag>
                                        <el-tag class="min-tag" size="small">Java</el-tag>
                                        <el-tag class="min-tag" size="small">html</el-tag>
                                        <el-tag class="min-tag" size="small">web</el-tag>
                                        <el-tag class="min-tag" size="small">大数据</el-tag>
                                    </p> 
                                </div> 
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div class="temp-footer">
                    <el-pagination
                    background
                    layout="prev, pager, next"
                    :total="50">
                    </el-pagination>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<style scoped lang="scss">
.userOrders {
    padding: 5px;
    .temp-footer {
        margin-top: 20px;
        bottom: 10px;
        text-align: right;
    }
    .userOrders {
        padding: 10px 15px 10px 0px;
    }

    .content-title {
        width: 40%;
        display: inline-block;
        vertical-align: top;
    }
    .content-title-img {
        padding: 3px;
        border: 1px solid #e2e2e2;
    }
    .content-body {
        width: 56%;
        display: inline-block;
        margin-left: 10px;
        vertical-align: top;
    }
    .mini-info {
        padding: 15px;
    }
    .info-null {
        color:#F59701;
    }
    .info-success {
        color:#67C23A;
    }
    .info-normal {
        color: #909399
    }
    .min-tag {
        margin-right:6px;
    }
    .order-frame {
        font-size: 14px;
        border: 1px solid #e2e2e2;
        padding: 8px; 
        margin: 5px;
        cursor: pointer;
    }
    .order-frame:hover {
        background-color: #e2e2e2
    }
}
</style>

<script>
export default {
  data() {
      return {
          activeTag:'first'
      }
  },
  methods: {
      handleClick(tab, event) {
          console.log(tab, event)
      },
      cancelClass() {
          this.$confirm('此操作将永久取消选课, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '取消成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已撤销操作'
          });          
        });
      }
  }
}
</script>
