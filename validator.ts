export interface Validator {
    validate(schema: any, arrayToCheck: any): boolean;
}

export class ApiValidator implements Validator {
    /**
     * Valideer een object aan de hand van een gegeven schema
     * 
     * @param  {any} schema
     * @param  {any} arrayToCheck
     */
    validate(schema: any, arrayToCheck: any) {
        let valid = true;

        Object.entries(schema).forEach((item) => {
            const value = this.getItemFromArray(arrayToCheck, item[0]);
            const actualType = this.toType(value);
            const requiredType = item[1];

            // Gaat ook fout op undefined :)
            if (actualType !== requiredType) {
                valid = false;
                return;
            }
        });

        return valid;
    }
    /**
     * Haal het type op van het gegeven object (voorbeeld van Stackoverflow)
     * 
     * De typeof() van javascript haalt niet specifiek genoeg het type op...
     * 
     * @param  {any} obj
     * @returns string
     */
    private toType(obj: any): string {
        const regex = ({}).toString.call(obj).match(/\s([a-zA-Z]+)/);
        let result = regex![0] as string;

        return result.trim().toLowerCase();
    }
    /**
     * Haal een waarde uit een object aan de hand van een gegeven key
     * 
     * @param  {any} array
     * @param  {string} keyToSearch
     * 
     * @returns any
     */
    private getItemFromArray(array: any, keyToSearch: string): any {
        let item;

        Object.entries(array).find(([key, value]) => {
            if (key === keyToSearch) {
                item = value;
                return;
            }
        });

        return item;
    }
}