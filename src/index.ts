enum KEYS { TIMEOUT = 'timeout', INTERVAL = 'interval' };

class BetterTimer {
	protected timer;
	protected type: KEYS;
  protected active: boolean;
  protected cleared: boolean;
	constructor (type: KEYS) {
		this.type = type;
		this.active = true;
		this.cleared = false;
	}
	public getType = (): KEYS => {
		return this.type;
	}
	public isActive = (): boolean => {
		return this.active;
	}
}

class Timeout extends BetterTimer {
	constructor (fn: Function, timeout: number | string) {
		super(KEYS.TIMEOUT);
		if (typeof timeout === 'string') timeout = parseFloat(timeout);
  	this.timer = setTimeout(fn, timeout);
	}
  public clear = (): void => {
    clearTimeout(this.timer);
    this.cleared = true;
		this.active = false;
  };
}

class Interval extends BetterTimer {
	constructor (fn: Function, interval: number | string) {
		super(KEYS.INTERVAL);
		if (typeof interval === 'string') interval = parseFloat(interval);
  	this.timer = setInterval(fn, interval);
	}
  public clear = (): void => {
    clearInterval(this.timer);
    this.cleared = true;
		this.active = false;
  };
}

const Clear = (timer) => {
  if (timer && timer.timer) {
    timer.clear()
    return timer.isActive();
  } else {
    return undefined
  }
}

export { KEYS, Timeout, Interval, Clear };
