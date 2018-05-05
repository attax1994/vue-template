export interface DashDialogOptionsInterface {
  abstract?: string;
  title?: string;
  content?: Array<string>;
  closeText?: string;
}

export class DashDialogOptionsEntity {
  abstract: string = '点击打开通知';
  title: string = '通知标题';
  content: Array<string> = ['段落1'];
  closeText: string = '关闭';
}