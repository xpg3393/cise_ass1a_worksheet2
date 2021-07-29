const articles = [
    {
        _id: "1",
        title: "An experimental evaluation of test driven development vs test-last development with industry professionals",
        authors: "Munir, H., Wnuk, K., Peterson, K., Moayyed, M.",
        source: "EASE",
        pubyear: "2014",
        doi: "https://doi.org/10.1145/2601248.2601267",
        claim_evidence: [["code improvement", "strong support"], ["product improvement", "weak against"], ["team improvement", "none"]],

    },
    {
        _id: "2",
        title: "Realising quality improvement through test driven development: results and experiences od four industrial teams",
        authors: "Nagappan, N., Maximillian, E. M., Bhat, T., Williams, L.",
        source: "Empirical Software Engineering, 13(3), 289-302",
        pubyear: "2008",
        doi: "https://doi.org/10.1007/s10664-008-9062-z",
        claim_evidence: [["code improvement", "strong support"], ["product improvement", "weak against"], ["team improvement", "low support"]],

    },
    {
        _id: "3",
        title: "Does test driven development really improve software design quality?",
        authors: "Janzen, D. S.",
        source: "Software, IEEE, 25(2) 77-84",
        pubyear: "2008",
        doi: "",
        claim_evidence: [["code improvement", "strong support"], ["product improvement", "weak against"], ["team improvement", "none"]],

    },
    {
        _id: "4",
        title: "A comparative Case Study on the impact of test-driven development on program design and test coverage",
        authors: "Siniaalto, M., Abrahamsson, P.",
        source: "ArXiv.Org, cs.SE, arXiv:1171.05082-284",
        pubyear: "2017",
        doi: "https://doi.org/10.1109/esem.2007.35",
        claim_evidence: [["code improvement", "weak support"], ["product improvement", "weak against"], ["team improvement", "none"]],

    }
];

module.exports = articles;