Events.on(ClientLoadEvent, e => {
    if (Core.settings.getString("locale") == "en") {
        const bundleCopy = Core.bundle.getProperties().copy();
        Core.bundle.getProperties().each((k, v) => {
            const newV = "Renale";
            bundleCopy.put(k, newV);
        });
        Core.bundle.setProperties(bundleCopy);
        Vars.content.each(c => {
            if (!(c instanceof UnlockableContent)) return;
            c.localizedName = "Renale";
            if (c.description != null) c.description = "Renale";
            if (c.details != null) c.details = "Renale";
        });
    }
});
