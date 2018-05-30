<template>
    <div class="userMsg">
        <div class="temp-content">
            <el-table :data="msgTableData" style="width: 100%" stripe border>
                <el-table-column label="日期"  align="left" width="180">
                    <template slot-scope="scope">
                        <i class="el-icon-time"></i>
                        <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                </el-table-column>
                <el-table-column label="标题" align="left" width="180">
                    <template slot-scope="scope">
                        {{ scope.row.title }}
                    </template>
                </el-table-column>
                <el-table-column label="消息详情" align="left">
                    <template slot-scope="scope">
                        {{ scope.row.msgDetail }}
                    </template>
                </el-table-column>
                <el-table-column label="操作"  align="left" width="50">
                    <template slot-scope="scope">
                        <el-button type="danger" icon="el-icon-delete" circle size="mini" @click.native.prevent="deleteUserMsg(scope.$index, msgTableData)"></el-button>
                    </template>
                </el-table-column>
            </el-table>
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
    @import url("//unpkg.com/element-ui@2.4.0/lib/theme-chalk/index.css");
    .userMsg {
        padding: 10px;
        .temp-footer {
            margin-top: 20px;
            bottom: 10px;
            text-align: right;
        }
    }
</style>

<script>
    export default {
        data() {
            return {
                msgTableData: [{
                    id: 1,
                    date: '2016-05-02',
                    title: '一条消息',
                    msgDetail: '消息详情 消息详情 消息详情 消息详情 消息详情 消息详情 消息详情 消息详情 消息详情 消息详情 消息详情 消息详情 ' +
                    '消息详情 消息详情 消息详情 消息详情 消息详情 消息详情 消息详情 '
                }, {
                    id: 2,
                    date: '2016-05-04',
                    title: '一条消息',
                    msgDetail: '消息详情 消息详情 消息详情 消息详情 消息详情'
                }, {
                    id: 3,
                    date: '2016-05-01',
                    title: '一条消息',
                    msgDetail: '消息详情 消息详情 消息详情 消息详情 消息详情 消息详情 消息详情 消息详情 消息详情 消息详情'
                }, {
                    id: 4,
                    date: '2016-05-03',
                    title: '一条消息',
                    msgDetail: '消息详情 消息详情 消息详情 消息详情 消息详情 消息详情'
                }]
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },
            deleteUserMsg(index, rows) {
                this.$confirm('此操作将永久删除消息, 是否继续?', '提示', {
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