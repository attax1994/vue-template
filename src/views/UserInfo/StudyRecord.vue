<template>
    <div class="studyRecord">
        <div class="temp-content">

                <fieldset class="content-box">
                    <legend><h3>&nbsp;今天上课&nbsp;</h3></legend>
                    <div class="content-body-progress">
                        <el-row>
                            <el-col :span="8" >
                                今天学习了1个小时
                            </el-col>
                            <el-col :span="8" >
                                共计学习3个小时
                            </el-col>
                            <el-col :span="8" >
                                全服排名第9999名
                            </el-col>
                        </el-row>
                    </div>
                </fieldset>
                <!-- <fieldset class="content-box">
                    <legend><h3>&nbsp;进度汇总&nbsp;</h3></legend>
                    <div class="content-body-progress">
                        <el-row>
                            <el-col :span="6" >
                                <el-progress type="circle" :percentage="25"></el-progress>
                            </el-col>
                            <el-col :span="6" >
                                <el-progress type="circle" :percentage="80" color="#8e71c7"></el-progress>
                            </el-col>
                            <el-col :span="6" >
                                <el-progress type="circle" :percentage="100" status="success"></el-progress>
                            </el-col>
                            <el-col :span="6" >
                                <el-progress type="circle" :percentage="50" status="exception"></el-progress>
                            </el-col>
                        </el-row>
                    </div>
                </fieldset> -->
            <fieldset class="content-box">
                <legend>
                    <h3>&nbsp;历史课程&nbsp;</h3>
                </legend>

                <div class="search-tag">
                    <el-checkbox>按进度</el-checkbox>
                    <el-checkbox>按类型</el-checkbox>
                    <el-checkbox>按名称</el-checkbox>
                </div>
                
                <el-row>
                    <el-col :span="6" :xs="12" :sm="6">
                        <div class="grid-content bg-purple order-frame">
                            <div class="content-title">
                                <div><img class="content-title-img" src="../../assets/img/carousel/carousel2.jpg" /></div>
                                <div class="img-title">
                                    <span class="mini-info info-null">免费</span><span>|</span>
                                    <span class="mini-info info-normal">已更新10集/共20集</span>
                                </div>
                            </div>
                            <div class="content-body">
                                <span class="main-title">&nbsp;全套Java编程完整版教程&nbsp;</span>
                                <p>
                                    <el-tag class="min-tag" size="mini">CSS</el-tag>
                                    <el-tag class="min-tag" size="mini">Java</el-tag>
                                    <el-tag class="min-tag" size="mini">html</el-tag>
                                    <el-tag class="min-tag" size="mini">web</el-tag>
                                    <el-tag class="min-tag" size="mini">大数据</el-tag>
                                </p>
                                <el-progress :percentage="70"></el-progress>
                            </div> 
                        </div>
                    </el-col>
                    <el-col :span="6" :xs="12" :sm="6">
                        <div class="grid-content bg-purple order-frame">
                            <div class="content-title">
                                <img class="content-title-img" src="../../assets/img/carousel/carousel2.jpg" />
                                <div class="img-title">
                                    <span class="mini-info info-null">免费</span><span>|</span>
                                    <span class="mini-info info-normal">已更新10集/共20集</span>
                                </div>
                            </div>
                            <div class="content-body">
                                <span class="main-title">&nbsp;全套Java编程完整版教程&nbsp;</span>
                                <p>
                                    <el-tag class="min-tag" size="mini">CSS</el-tag>
                                    <el-tag class="min-tag" size="mini">Java</el-tag>
                                    <el-tag class="min-tag" size="mini">html</el-tag>
                                    <el-tag class="min-tag" size="mini">web</el-tag>
                                    <el-tag class="min-tag" size="mini">大数据</el-tag>
                                </p>
                                <el-progress :percentage="70"></el-progress>
                            </div> 
                        </div>
                    </el-col>
                    <el-col :span="6" :xs="12" :sm="6">
                        <div class="grid-content bg-purple order-frame">
                            <div class="content-title">
                                <img class="content-title-img" src="../../assets/img/carousel/carousel2.jpg" />
                                <div class="img-title">
                                    <span class="mini-info info-null">免费</span><span>|</span>
                                    <span class="mini-info info-normal">已更新10集/共20集</span>
                                </div>
                            </div>
                            <div class="content-body">
                                <span class="main-title">&nbsp;全套Java编程完整版教程&nbsp;</span>
                                <p>
                                    <el-tag class="min-tag" size="mini">CSS</el-tag>
                                    <el-tag class="min-tag" size="mini">Java</el-tag>
                                    <el-tag class="min-tag" size="mini">html</el-tag>
                                    <el-tag class="min-tag" size="mini">web</el-tag>
                                    <el-tag class="min-tag" size="mini">大数据</el-tag>
                                </p>
                                <el-progress :percentage="70"></el-progress>
                            </div> 
                        </div>
                    </el-col>
                    <el-col :span="6" :xs="12" :sm="6">
                        <div class="grid-content bg-purple order-frame">
                            <div class="content-title">
                                <img class="content-title-img" src="../../assets/img/carousel/carousel2.jpg" />
                                <div class="img-title">
                                    <span class="mini-info info-null">免费</span><span>|</span>
                                    <span class="mini-info info-normal">已更新10集/共20集</span>
                                </div>
                            </div>
                            <div class="content-body">
                                <span class="main-title">&nbsp;全套Java编程完整版教程&nbsp;</span>
                                <p>
                                    <el-tag class="min-tag" size="mini">CSS</el-tag>
                                    <el-tag class="min-tag" size="mini">Java</el-tag>
                                    <el-tag class="min-tag" size="mini">html</el-tag>
                                    <el-tag class="min-tag" size="mini">web</el-tag>
                                    <el-tag class="min-tag" size="mini">大数据</el-tag>
                                </p>
                                <el-progress :percentage="70"></el-progress>
                            </div> 
                        </div>
                    </el-col>
                </el-row>
            </fieldset>

        </div>

        <div class="temp-footer">
            <el-pagination
            background
            layout="prev, pager, next"
            :total="50">
            </el-pagination>
        </div>
    </div>
</template>

<style scoped lang="scss">
.studyRecord {
    .order-frame {
        font-size: 14px;
        border: 1px solid #e2e2e2;
        padding: 3px 3px 5px 3px; 
        margin: 5px;
        cursor: pointer;
        height: auto;
        width: auto;
    }
    .img-title {
        position: absolute;
        top: 54%;
        width: 23%;
        background-color:white;
        font-size: 14px;
        opacity:0.85;
    }
    .order-frame:hover {
        background-color: #e2e2e2
    }
    .content-title {
        display: inline-block;
        vertical-align: top;
    }
    .content-title-img {
        padding: 2px;
        border: 1px solid #e2e2e2;
        height: 150px;
        vertical-align: center;
    }
    .content-body {
        display: inline-block;
        margin-left: 10px;
        vertical-align: top;
    }
    .temp-footer {
        margin-top: 20px;
        bottom: 10px;
        text-align: right;
    }
    .min-tag {
        margin-right:2px;
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
    .main-title {
        font-weight:bold;
        font-size: 15px;
    }
    .search-tag {
        text-align: right;
        display: inline-block;
    }
    .content-box {
        margin-right:10px;
        font-size: 14px;
        border: none;
        border-top: 1px solid #e2e2e2;
    }
}
</style>
