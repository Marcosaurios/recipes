export default {
    getEntries() {
        return {
            sys: { type: "Array" },
            total: 2,
            skip: 0,
            limit: 100,
            items: [
              {
                sys: {
                  space: { sys: [Object] },
                  id: "5diOxDue4H7RBThkaUOsib",
                  type: "Entry",
                  createdAt: "2021-11-30T23:58:28.764Z",
                  updatedAt: "2021-12-02T00:47:59.287Z",
                  environment: { sys: [Object] },
                  revision: 2,
                  contentType: { sys: [Object] },
                  locale: "es-ES",
                },
                fields: {
                  titulo: "Tortilla francesa",
                  ingredientes: [
                    "12 huevos por persona",
                    "2 lonchas de jamon york",
                    "sal",
                    "aceite",
                  ],
                  descripcion:
                    "## Francesa\n" +
                    "\n" +
                    "Pues mucho mas simple\n" +
                    "1. fdas\n" +
                    "2. fdafds\n" +
                    "3. fdas\n" +
                    "4. *fdsafd*\n",
                  slug: "tortilla-francesa",
                },
              },
            ],
          }
    }
}