import BaseService from "./BaseService";

export default class BranchService extends BaseService {
    getBranch(hashImage) {
        return {
            data:
                [
                    {
                        imageUrl: "http://simpanan.danaarta.net/mobileapp/images/f_cengkareng.png?random_number=" + hashImage,
                        location: {
                            latitude: -6.141892433166504,
                            longitude: 106.73435974121094
                        },
                        name: "Cengkareng",
                        address: "Mutiara Taman Palem, Blok D8 no 91",
                        city: "Cengkareng Timur, Jakarta Barat"
                    },
                    {
                        imageUrl: "http://simpanan.danaarta.net/mobileapp/images/f_balaraja.png?random_number=" + hashImage,
                        location: {
                            latitude: -6.2095276,
                            longitude: 106.4487719
                        },
                        name: "Balaraja",
                        address: "KM 25 Nagrek Balaraja",
                        city: "Tangerang, Banten 15610"
                    },
                    {
                        imageUrl: "http://simpanan.danaarta.net/mobileapp/images/f_cikupa.png?random_number=" + hashImage,
                        location: {
                            latitude: -6.2582167,
                            longitude: 106.5268503
                        },
                        name: "Cikupa",
                        address: "Citra Raya Cikupa Ruko Little Ginza",
                        city: "Tangerang"
                    },
                    {
                        imageUrl: "http://simpanan.danaarta.net/mobileapp/images/f_jatake.png?random_number=" + hashImage,
                        location: {
                            latitude: -6.202711582183838,
                            longitude: 106.56072235107422
                        },
                        name: "Jatake",
                        address: "Jl Telesonik Raya Komplek",
                        city: "Tangerang, Banten"
                    },
                    {
                        imageUrl: "http://simpanan.danaarta.net/mobileapp/images/f_pasarkemis.png?random_number=" + hashImage,
                        location: {
                            latitude: -6.171642780303955,
                            longitude: 106.55500793457031
                        },
                        name: "Pasar Kemis",
                        address: "Jl Raya Pasar Kemis, Ruko Wisma Mas",
                        city: "Tangerang, Banten"
                    },
                    {
                        imageUrl: "http://simpanan.danaarta.net/mobileapp/images/f_selikur.png?random_number=" + hashImage,
                        location: {
                            latitude: -6.138480186462402,
                            longitude: 106.30382537841797
                        },
                        name: "Selikur",
                        address: "Jl Raya Serang Warung Selikur",
                        city: "Serang, Banten"
                    }
                ]
        };
    }
}