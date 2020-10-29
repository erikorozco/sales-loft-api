'use strict';

class StringHelper {
    
    constructor() {}

    /**
     * Calculate the porcentage difference for two given string
     * String with the max length will be take as source
     *
     * @param {Array<String>} s1
     * @param {Array<String>} s2
     * @returns Number
     * @memberof StringHelper
     */
    getStringsPorcentageDiffence(s1, s2) {

        let source = s1.length >= s2.length ? s1 : s2;
        let target = s1.length < s2.length ? s1 : s2;
        let differences1 = 0;
        let differences2 = 0;
        let min;
    
        // Find differences in start from first index to last
        differences1 = source.length - target.length;
        for (let i = 0; i < target.length; i++) {
            if (source[i] !== target[i]) {
                differences1++;
            }
        }
        // Find differences in start from las index to first (reverse)
        differences2 = source.length - target.length;
        for (let i = target.length; i >= 0; i--) {
            if (source[i] !== target[i]) {
                differences2++;
            }
        }
    
        // Get min difference found
        min = Math.min(differences1, differences2);
    
        // Calculate porcentage value to the given source
        let porcentage = parseFloat((min/source.length) * 100);
    
        return porcentage;
    
    }

}

module.exports = StringHelper;