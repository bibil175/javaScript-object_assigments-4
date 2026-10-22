function deepClone(value) {
    if (value === null || typeof value !== "object") {
        return value;
    }

    if (Array.isArray(value)) {
        return value.map(item => deepClone(item));
    }

    const clone = {};
    for (const key of Object.keys(value)) {
        clone[key] = deepClone(value[key]);
    }
           
    return clone;
}

const original = {
    name: "Data awal",
    details: {
        active: true,
        tags:["javascript", "node"]
    },
    score: [10,20]
};

const cloned = deepClone(original);
cloned.details.tags.push("object");
cloned.score[0] = 99;

console.log("Objek asli:", original);
console.log("Hasil clone:", cloned);