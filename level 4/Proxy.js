function trackChanges(object) {
    return new Proxy(object, {
        set(target, property, value) {
            const existed = Object.prototype.hasOwnProperty.call(
                target,
                property
            );

            const previousValue = target[property];

            target[property] = value;

            console.log(
                `[Proxy] ${existed ? "UPDATE" : "ADD"} ${String(property)}:`,
                previousValue,
                "->",
                value
            );

            return true;
        },

        deleteProperty(target, property) {
            if (
                Object.prototype.hasOwnProperty.call(
                    target,
                    property
                )
            ) {
                const previousValue = target[property];

                delete target[property];

                console.log(
                    `[Proxy] DELETE ${String(property)}:`,
                    previousValue,
                    "-> undefined"
                );
            }

            return true;
        }
    });
}

const settings = trackChanges({
    theme: "light",
    volume: 50
});

settings.theme = "dark";
settings.language = "id";
delete settings.volume;

console.log("Objek akhir:", settings);