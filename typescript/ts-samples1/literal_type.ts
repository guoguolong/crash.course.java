function literal_type() {
    type AgeNumber = 1 | 4 | 6 | 3;
    function getAget(): AgeNumber {
        return 4;
    }
    console.log(getAget())
}

literal_type();