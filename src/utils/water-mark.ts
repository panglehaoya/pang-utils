export interface ISetWaterMarkConfig {
  text: string;
  fontSize?: number;
  fontColor?: string;
  fontFamily?: string;
  rotate?: number;
  /**
   * 水印X轴间距
   */
  offsetX?: number;
  /**
   * 水印的Y轴间距类型
   */
  offsetY?: number;
  /**
   * 是否允许删除水印 默认为false
   */
  allowDelete?: boolean;
}

const defaultConfig: ISetWaterMarkConfig = {
  text: "waterMark",
  fontSize: 18,
  fontColor: "black",
  fontFamily: "Microsoft Yahei",
  rotate: 30,
  allowDelete: false,
};

export class WaterMark {
  config: ISetWaterMarkConfig;
  selector: string;
  maskDiv: HTMLDivElement;
  private observer: MutationObserver;

  constructor(selector = "body") {
    this.selector = selector;
    this.observer = null;
    this.maskDiv = null;
  }

  /**
   * 设置水印
   */
  setWaterMark(config = defaultConfig) {
    const el: HTMLElement = document.querySelector(this.selector);
    if (!el) {
      throw new Error(`${this.selector} can't found`);
    }
    if (this.maskDiv) return;

    const mergeConfig = { ...defaultConfig, ...config };
    this.config = { ...mergeConfig };
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    this.maskDiv = document.createElement("div");
    canvas.width =
      mergeConfig.offsetX ||
      Math.ceil(ctx.measureText(mergeConfig.text).width) +
        Math.ceil(el.clientWidth / 4);
    canvas.height = mergeConfig.offsetY || Math.ceil(el.clientWidth / 3);
    ctx.font = `normal ${mergeConfig.fontSize}px serif`;
    ctx.fillStyle = `${mergeConfig.fontColor}`;
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.rotate((30 * Math.PI) / 180);
    ctx.fillText(mergeConfig.text, 10, 10);

    const src = canvas.toDataURL("image/png");
    this.maskDiv.style.position = "absolute";
    this.maskDiv.style.zIndex = "9999";
    this.maskDiv.id = "mask";
    this.maskDiv.style.top = "20px";
    this.maskDiv.style.left = "0";
    this.maskDiv.style.width = "100%";
    this.maskDiv.style.height = "100%";
    this.maskDiv.style.pointerEvents = "none";
    this.maskDiv.style.backgroundImage = `url(${src})`;
    el.appendChild(this.maskDiv);
    if (!mergeConfig.allowDelete && !this.observer) {
      this.monitor();
    }
  }

  /**
   * 清空水印
   */
  clear() {
    this.observer.disconnect();
    const el = document.querySelector(this.selector);
    el.removeChild(this.maskDiv);
    this.maskDiv = null;
  }

  private clearDom() {
    const el = document.querySelector(this.selector);
    el.removeChild(this.maskDiv);
    this.maskDiv = null;
  }

  private monitor() {
    const el = document.querySelector(this.selector);
    const monitorOptions: MutationObserverInit = {
      childList: true,
      attributes: true,
      characterData: true,
      subtree: true,
      attributeOldValue: true,
      characterDataOldValue: true,
    };
    this.observer = new MutationObserver((mutation) =>
      this.monitorCallback(mutation)
    );
    this.observer.observe(el, monitorOptions);
  }

  private monitorCallback(mutation: MutationRecord[]) {
    const changeDom = mutation[0];
    const removeNodes = changeDom.removedNodes[0] as HTMLElement;

    if (removeNodes && removeNodes.id === this.maskDiv.id) {
      this.maskDiv = null;
      this.setWaterMark(this.config);
    }

    if (changeDom.type === "attributes") {
      this.clearDom();
      this.setWaterMark(this.config);
    }
  }
}
