<template>
    <div class="courseManagement">
        <fieldset class="content-box">
            <legend><h3>&nbsp;课程信息管理&nbsp;</h3></legend>
            <el-table :data="courseInfoData" style="width: 100%" stripe border>
                <el-table-column label="创作日期"  align="left" width="180" sortable>
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="课程标题" align="left" width="180">
                    <template slot-scope="scope">
                        {{ scope.row.title }}
                    </template>
                </el-table-column>
                <el-table-column label="课程类目" align="left">
                    <template slot-scope="scope">
                        {{ scope.row.msgDetail }}
                    </template>
                </el-table-column>
                <el-table-column label="课程状态" align="left" width="90">
                    <template slot-scope="scope">
                        {{ scope.row.courseState }}
                    </template>
                </el-table-column>
                <el-table-column label="操作"  align="left" width="94">
                    <template slot-scope="scope">
                        <el-button type="info" icon="el-icon-edit" circle size="mini" @click="crsDialogVisible = true"></el-button>
                        <el-button type="danger" icon="el-icon-delete" circle size="mini" @click.native.prevent="deleteCourseInfoData(scope.$index, courseInfoData)"></el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="block">
                <el-pagination
                        layout="prev, pager, next"
                        :total="50">
                </el-pagination>
            </div>
        </fieldset>

        <el-dialog title="编辑课程信息" :visible.sync="crsDialogVisible">
            <el-form :model="form">
                <el-form-item label="课程标题" :label-width="formLabelWidth">
                    <el-input v-model="form.name" auto-complete="off"></el-input>
                </el-form-item>
                <el-form-item label="课程类型" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择课程类型">
                        <el-option label="类型一" value="shanghai"></el-option>
                        <el-option label="类型二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="课程目标" :label-width="formLabelWidth">
                    <el-input></el-input>
                </el-form-item>
                <el-form-item label="课程描述" :label-width="formLabelWidth">
                    <el-input type="textarea" :rows="4"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="crsDialogVisible = false">取 消</el-button>
                <el-button @click="openEditCoursePage">全局修改</el-button>
                <el-button type="primary" @click="crsDialogVisible = false">确 定</el-button>
            </div>
        </el-dialog>

        <fieldset class="content-box">
            <legend><h3>&nbsp;课程资源管理&nbsp;</h3></legend>
            <el-table :data="courseResourceData" style="width: 100%" stripe border>
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="章节一" class="singleChapter">
                                <span>{{ props.row.percentage }}</span>
                                <el-button type="warning" icon="el-icon-upload" circle size="mini" @click="rscDialogVisible = true"></el-button>
                            </el-form-item>
                            <el-form-item label="章节二" class="singleChapter">
                                <span>{{ props.row.percentage }}</span>
                                <el-button type="warning" icon="el-icon-upload" circle size="mini" @click="rscDialogVisible = true"></el-button>
                            </el-form-item>
                            <el-form-item label="章节三" class="singleChapter">
                                <span>{{ props.row.percentage }}</span>
                                <el-button type="warning" icon="el-icon-upload" circle size="mini" @click="rscDialogVisible = true"></el-button>
                            </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column label="日期"  align="left" width="180">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="课程标题" align="left" width="180">
                    <template slot-scope="scope">
                        {{ scope.row.title }}
                    </template>
                </el-table-column>
                <el-table-column label="资源进度" align="left">
                    <template slot-scope="scope">
                        <el-progress :percentage='scope.row.percentage' color="#8e71c7"></el-progress>
                    </template>
                </el-table-column>
                <el-table-column label="状态"  align="left" width="80">
                    <template slot-scope="scope">
                        {{ scope.row.resourceState }}
                    </template>
                </el-table-column>
            </el-table>
            <div class="block">
                <el-pagination
                        layout="prev, pager, next"
                        :total="50">
                </el-pagination>
            </div>
        </fieldset>

        <el-dialog title="编辑课程资源(标题 -- 章节)" :visible.sync="rscDialogVisible">
            <el-form :model="form">
                <!--<el-form-item :label-width="formLabelWidth">-->
                    <!--标题 &#45;&#45; 章节-->
                <!--</el-form-item>-->

                <!--<div class="path-board-title">-->
                    <!--<span>标题 &#45;&#45; 章节</span>-->
                <!--</div>-->
                <!--<el-form-item label="课程章节" :label-width="formLabelWidth">-->
                    <!--章节-->
                <!--</el-form-item>-->
                <!--<el-form-item label="课程章节" :label-width="formLabelWidth">-->
                    <!--<el-select v-model="form.region" placeholder="请选择">-->
                        <!--<el-option label="章节一" value="shanghai"></el-option>-->
                        <!--<el-option label="章节二" value="beijing"></el-option>-->
                    <!--</el-select>-->
                <!--</el-form-item>-->
                <!--<el-form-item label="课程资源" :label-width="formLabelWidth">-->
                <div class="path-board">
                    <el-row>
                        <el-col :span="12">
                            <el-form ref="form" :model="formTypeB" label-width="80px" style="padding-bottom: 5px;padding-right: 10px;border-right: 1px dashed #d9d9d9;">
                                <el-form-item label="类型名称" style="margin-bottom: 10px;">
                                    <el-select v-model="formTypeB.region" placeholder="请选择">
                                        <el-option label="百度云盘" value="百度云盘"></el-option>
                                        <el-option label="金山网盘" value="金山网盘"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="URL地址" style="margin-bottom: 5px;">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                            </el-form>
                        </el-col>
                        <el-col :span="12">
                            <el-form ref="form" :model="form" label-width="80px">
                                <el-form-item label="下载备注">
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea3" style="width: 100%;">
                                    </el-input>
                                </el-form-item>
                            </el-form>
                        </el-col>
                    </el-row>
                </div>
                <div class="path-board">
                    <el-row>
                        <el-col :span="12">
                            <el-form ref="form" :model="formTypeB" label-width="80px" style="padding-bottom: 5px;padding-right: 10px;border-right: 1px dashed #d9d9d9;">
                                <el-form-item label="类型名称" style="margin-bottom: 10px;">
                                    <el-select v-model="formTypeB.region" placeholder="请选择">
                                        <el-option label="百度云盘" value="百度云盘"></el-option>
                                        <el-option label="金山网盘" value="金山网盘"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label="URL地址" style="margin-bottom: 5px;">
                                    <el-input v-model="form.name"></el-input>
                                </el-form-item>
                            </el-form>
                        </el-col>
                        <el-col :span="12">
                            <el-form ref="form" :model="form" label-width="80px">
                                <el-form-item label="下载备注">
                                    <el-input
                                            type="textarea"
                                            :autosize="{ minRows: 4, maxRows: 8}"
                                            placeholder="请输入内容"
                                            v-model="textarea3" style="width: 100%;">
                                    </el-input>
                                </el-form-item>
                            </el-form>
                        </el-col>
                    </el-row>
                </div>
                <!--</el-form-item>-->
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="rscDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="rscDialogVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<style scoped lang="scss">
    @import url("//unpkg.com/element-ui@2.4.0/lib/theme-chalk/index.css");
    .courseManagement {
        padding: 0px 10px;
        .content-box {
            margin-right:10px;
            font-size: 14px;
            border: none;
            border-top: 1px solid #e2e2e2;
            .block {
                text-align: right;
            }
            .singleChapter {
                margin-right:100px;
            }
        }
        .path-board-title {
            margin-bottom: 10px;
        }
        .path-board {
            border: 1px dashed #d9d9d9;
            margin-bottom: 10px;
            padding: 20px 10px 0px 0;
            .path-board-col {
                display: inline-block;
                width: 48%;
                .path-board-col-content {
                    margin:0px;
                }
            }
        }
        .path-board:hover {
            border-color: #409EFF;
        }
        .path-board-btn {
            width: 30%;
            height: 50px;
            text-align: center;
            margin:auto;
        }
    }
</style>

<script>
    export default {
        data() {
            return {
                imageUrl: '',
                textarea3: '',
                input: '',
                form: {
                    name: '',
                    region: ''
                },
                formTool: {
                    name: '',
                    region: ''
                },
                formTypeA: {
                    name: '',
                    region: ''
                },
                formTypeB: {
                    name: '',
                    region: ''
                },
                courseInfoData: [{
                    date: '2016-05-04',
                    title: '课程A',
                    courseState: '已完成',
                    msgDetail: '社科 - 管理学 - 信息分析'
                }, {
                    date: '2016-05-05',
                    title: '课程B',
                    courseState: '审核中',
                    msgDetail: '自然 - 计算机 - 人工智能'
                }, {
                    date: '2016-05-05',
                    title: '课程C',
                    courseState: '已创建',
                    msgDetail: '自然 - 计算机 - 人工智能'
                }, {
                    date: '2016-05-05',
                    title: '课程D',
                    courseState: '退修中',
                    msgDetail: '自然 - 计算机 - 人工智能'
                }, {
                    date: '2016-05-05',
                    title: '课程E',
                    courseState: '已撤销',
                    msgDetail: '自然 - 计算机 - 人工智能'
                }],
                courseResourceData: [{
                    date: '2016-05-04',
                    title: '课程A',
                    msgDetail: '详情 详情 详情 详情 详情',
                    percentage: '100.0',
                    resourceState: '上传完毕'
                },
                {
                    date: '2016-05-05',
                    title: '课程B',
                    msgDetail: '详情 详情 详情 详情 详情',
                    percentage: '100.0',
                    resourceState: '上传完毕'
                },
                {
                    date: '2016-05-05',
                    title: '课程C',
                    msgDetail: '详情 详情 详情 详情 详情',
                    percentage: '35.0',
                    resourceState: '上传中'
                },
                {
                    date: '2016-05-05',
                    title: '课程D',
                    msgDetail: '详情 详情 详情 详情 详情',
                    percentage: '0',
                    resourceState: '待修改'
                }],
                crsDialogVisible: false, // 课程管理对话框
                rscDialogVisible: false, // 资源管理对话框
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '120px'
            }
        },
        methods: {
            openEditCoursePage() {
                this.$router.push({path:'/course/editCourse'});
            },
            deleteCourseInfoData(index, rows) {
                this.$confirm('此操作将永久删除课程项目, 是否继续?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.$message({
                        type: 'success',
                        message: '删除成功!'
                    });
                    rows.splice(index, 1);
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