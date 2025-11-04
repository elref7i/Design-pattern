class OldAnalytics {
  trackEvent(name, data) {
    console.log("hello", name, data);
  }
}

class NewAnalytics {
  send({ event, payload }) {
    console.log("hello new ", event, payload);
  }
}

class AdaptorAnalytics {
  constructor(toolName) {
    this.toolName = toolName;
  }

  track(name, data) {
    if (this.toolName instanceof NewAnalytics) {
      return this.toolName.send({ event: name, payload: data });
    }
    return this.toolName.trackEvent(name, data);
  }
}

const a1 = new AdaptorAnalytics(new NewAnalytics());
const a2 = new AdaptorAnalytics(new OldAnalytics());

a1.track("Event One", { id: 1, name: "Dokey" });
a2.track("Event Two", { id: 1, name: "Maddi" });
