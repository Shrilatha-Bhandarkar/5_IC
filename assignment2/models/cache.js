class Cache {
    constructor() {
        this.cache = {};
    }

    get(key) {
        return this.cache[key];
    }

    set(key, value, ttl) {
        this.cache[key] = value;
        setTimeout(() => {
            delete this.cache[key];
        }, ttl * 1000);
    }
}

module.exports = Cache;
