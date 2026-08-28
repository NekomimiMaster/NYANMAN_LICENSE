/* =========================================================
 * NYANMAN License Terms — English (reference translation)
 * ---------------------------------------------------------
 * 構造（キー・配列の並び・id・status）は ja.js と完全一致させること。
 * 翻訳は参考訳であり、日本語版が正文（第8条2項）。
 * ========================================================= */
window.NYANMAN_I18N = window.NYANMAN_I18N || {};
window.NYANMAN_I18N["en"] = {
  meta: {
    label: "English",
    flag: "flag-us",
    htmlLang: "en",
    docTitle: "NYANMAN License Terms",
    description: "License terms for the 3D model \"NYANMAN\" (based on VN3 License Ver. 1.10)",
  },

  ui: {
    langNotice: "This translation is provided for reference only. If there is any discrepancy, the Japanese text is the official and binding version (Article 8, Paragraph 2).",
    searchPlaceholder: "Search the terms (e.g. modify / streaming / redistribution)",
    searchLabel: "Search the terms",
    searchHits: "{n} matching block(s) found. Only matching blocks are shown.",
    searchNoHits: "No items match \"{q}\".",
    searchClear: "Clear",
    navQuick: "Quick Reference",
    navTerms: "General Provisions",
    navConds: "Individual Conditions",
    navQa: "Q&A",
    navInfo: "Revision History",
    themeToggle: "Toggle color theme",
    statusOk: "Permitted",
    statusNg: "Not permitted",
    statusCond: "Conditionally permitted",
    statusAsk: "Contact individually",
    statusOpt: "Optional",
    statusNote: "Special Note",
    legendTitle: "Legend",
    top: "Back to top",
    noscript: "JavaScript is required to view this page.",
  },

  hero: {
    eyebrow: "3D CHARACTER MODEL LICENSE",
    title: "NYANMAN License Terms",
    lead:
      "This page contains the license terms for the 3D model \"NYANMAN\". By starting to use the Data in any manner — including purchase, download, or installation — you are deemed to have agreed to these Terms. Please read them carefully before use.",
    badges: ["Based on VN3 License Ver. 1.10", "Terms Version 1.00", "Established 2026-08-28"],
    ctaQuick: "See Quick Reference",
    ctaTerms: "Read the Full Terms",
  },

  quick: {
    num: "01",
    title: "Quick Reference",
    note: "This list is a simplified overview of the scope of the license. Always check it together with the full terms below (General Provisions and Individual Conditions).",
    groups: [
      {
        title: "1. Who May Use",
        items: [
          { id: "A", icon: "pic-person", label: "Use by individuals", status: "ok", note: "For both commercial and non-commercial purposes" },
          { id: "B", icon: "pic-building", label: "Use by corporations", status: "ask", note: "" },
        ],
      },
      {
        title: "2. Uploading to Online Services",
        items: [
          { id: "C", icon: "pic-cloud", label: "Uploading to social platforms (VRChat etc., for personal use)", status: "ok", note: "" },
          { id: "D", icon: "pic-game", label: "Uploading to online game platforms (for personal use)", status: "ok", note: "" },
          { id: "E", icon: "pic-users", label: "Uploading for the purpose of letting third parties use the Data", status: "ng", note: "" },
        ],
      },
      {
        title: "3. Sensitive Expression",
        items: [
          { id: "F", icon: "pic-heart", label: "Use in sexual expression", status: "cond", note: "Zoning (age-restriction / separation) required" },
          { id: "G", icon: "pic-sword", label: "Use in violent expression", status: "cond", note: "Zoning (separation) required" },
          { id: "H", icon: "pic-mega", label: "Use in political or religious activities", status: "ng", note: "" },
        ],
      },
      {
        title: "4. Processing",
        items: [
          { id: "I", icon: "pic-wrench", label: "Adjustment (incl. polygon reduction, format conversion)", status: "ok", note: "" },
          { id: "J", icon: "pic-pen", label: "Modification and use of modified data", status: "ok", note: "" },
          { id: "K", icon: "pic-puzzle", label: "Use for modifying other data", status: "ok", note: "" },
          { id: "L", icon: "pic-hands", label: "Outsourcing adjustment / modification", status: "cond", note: "Only between Users" },
        ],
      },
      {
        title: "5. Redistribution / Distribution",
        items: [
          { id: "M", icon: "pic-share", label: "Redistribution in unmodified form", status: "ng", note: "" },
          { id: "N", icon: "pic-boxpen", label: "Distribution of modified data", status: "ng", note: "" },
        ],
      },
      {
        title: "6. Use in Media / Products",
        items: [
          { id: "O", icon: "pic-film", label: "Use in video works, streaming, broadcasting", status: "ok", note: "See Special Note 1" },
          { id: "P", icon: "pic-book", label: "Use in publications and e-publications", status: "ok", note: "See Special Note 1" },
          { id: "Q", icon: "pic-goods", label: "Use in physical goods (merchandise)", status: "ask", note: "" },
          { id: "R", icon: "pic-chip", label: "Incorporation into software", status: "ask", note: "" },
        ],
      },
      {
        title: "7. Derivative Works",
        items: [
          { id: "S", icon: "pic-shirt", label: "Creating costume data reusing meshes / weights", status: "ok", note: "Distribution permitted, commercial or not" },
          { id: "T", icon: "pic-palette", label: "Creating new spec-conforming costumes / textures", status: "ok", note: "Distribution permitted, commercial or not" },
          { id: "U", icon: "pic-sparkle", label: "Creating derivative works (fan works)", status: "ok", note: "Distribution permitted, commercial or not" },
        ],
      },
      {
        title: "8. Other",
        items: [
          { id: "V", icon: "pic-credit", label: "Credit when using", status: "opt", note: "Not required, but appreciated" },
          { id: "W", icon: "pic-swap", label: "Transfer of rights and obligations", status: "ng", note: "" },
        ],
      },
      {
        title: "9. Special Notes",
        items: [
          { id: "X1", icon: "pic-alert", label: "No content that could be mistaken for official content (applies to O / P)", status: "note", note: "" },
          { id: "X2", icon: "pic-alert", label: "Armature (bone) data may be used when creating compatible costumes", status: "note", note: "" },
        ],
      },
    ],
  },

  terms: {
    num: "02",
    title: "General Provisions",
    preamble: {
      id: "preamble",
      title: "Preamble",
      body: [
        "Nekomimi Master (ねこみみマスター) (hereinafter the \"Rights Holder\") grants users permission (hereinafter \"this License\") to use the Data defined in the NYANMAN License Terms (hereinafter \"these Terms\"), in accordance with these Terms. Users must review the contents of these Terms before starting to use the Data. By starting to use the Data in any manner — including purchase, download, or installation — the user is deemed to have agreed to these Terms.",
        "If the user is a minor or another person with limited legal capacity, the user must obtain the prior consent of a parent or other legal representative before agreeing to these Terms.",
      ],
    },
    articles: [
      {
        id: "art-1",
        title: "Article 1 (Definitions)",
        intro: "The terms used in these Terms follow the definitions below.",
        defs: [
          { term: "\"This Data\"", def: "The data listed under \"Licensed Data\" in the Individual Conditions, and its Parts." },
          { term: "\"User\"", def: "Any person, whether an individual or a corporation, who has lawfully obtained this Data from the Rights Holder or a third party designated by the Rights Holder, through legitimate purchase, legitimate download, or other legitimate means." },
          { term: "\"Non-Commercial Paid\"", def: "Activities that are not aimed at making a profit and that receive compensation (regardless of its form, name, or recipient; the same applies hereinafter) only to cover expenses such as material costs and other necessary costs. Activities that generate profit beyond such compensation and are conducted as a business are regarded as commercial; however, where the profit is clearly not large enough to be called a business, a small amount of profit is tolerated." },
          { term: "\"Commercial\"", def: "Activities that do not fall under Non-Commercial Paid and are conducted for business purposes or to receive compensation." },
          { term: "\"Avatar\"", def: "An image, icon, 3D model, or the like used to represent some entity." },
          { term: "\"Social Communication Platform\"", def: "A service that enables one-way or two-way communication with others online." },
          { term: "\"Online Game Platform\"", def: "A service that provides games that run online, or such an online game itself." },
          { term: "\"Adjustment\"", def: "Corrections made within the minimum necessary scope to use this Data properly, including minor fixes to weights and rigs." },
          { term: "\"Modification\"", def: "Processing all or part of this Data beyond the scope of Adjustment, resulting in a state different from this Data." },
          { term: "\"Parts\"", def: "Components and materials of this Data, and other data produced by disassembling this Data, including weights, rigs, and the like." },
          { term: "\"Transfer of Rights and Obligations\"", def: "Transferring, lending, or offering as collateral all or part of rights and obligations to a third party, or having a third party assume them." },
        ],
      },
      {
        id: "art-2",
        title: "Article 2 (Grant of License)",
        paras: [
          { t: "1. The Rights Holder grants the User a non-exclusive license to use this Data personally, worldwide, by the methods described in these Terms, within the period described under \"License Period and Changes to the License\" of the Individual Conditions. However, if the User is a minor or another person with limited legal capacity, this applies only where the prior consent of a parent or other legal representative has been obtained." },
          { t: "2. If there is any contradiction or conflict between the Individual Conditions and the General Provisions, the former prevails. Furthermore, the Special Notes prevail over any other provisions." },
          { t: "3. The User may reproduce and use this Data within the scope of this License." },
          { t: "4. Permission concerning use on a specific system includes permission for the User to sublicense the rights to this Data required by that system, within the minimum necessary scope, in order to achieve the purpose of the permission. This includes, for example, cases where, upon uploading to the system, the operator of that system requires a sublicense to use, reproduce, or distribute this Data for the purpose of providing its service. However, this excludes cases where the system's requirements or the provisions of its terms of service are, in light of accepted social norms, significantly disadvantageous or unreasonable to the Rights Holder, and cases where it is foreseeable that the operator of the system will cause damage or disadvantage to the Rights Holder." },
          { t: "5. Where explicitly permitted in the Individual Conditions, the User may outsource the Adjustment or Modification of this Data to a third party. In this case, the User assumes the obligation to prohibit the contractor (hereinafter the \"Contractor\") from using this Data for any purpose other than the Adjustment or Modification based on the User's instructions, and is jointly and severally liable to the Rights Holder for the results of the Contractor's actions." },
          { t: "6. Using this Data in any manner not described in these Terms requires the prior express permission of the Rights Holder." },
        ],
      },
      {
        id: "art-3",
        title: "Article 3 (Disclaimer)",
        paras: [
          { t: "This Data is provided as is. The Rights Holder makes no warranty regarding fitness for a particular purpose, non-infringement of third-party rights, absence of defects, or matters arising from laws, culture, commercial practice, or the course of use. The User bears all responsibility for the use of this Data and releases the Rights Holder from liability. The Rights Holder assumes no responsibility whatsoever for damages arising from the use of, or the inability to use, this Data. Even where the Rights Holder is liable, unless the Rights Holder has acted with intent or gross negligence, and except where prohibited by law, the Rights Holder's liability for damages is limited to direct and ordinary damages, up to the price at which this Data was provided." },
        ],
      },
      {
        id: "art-4",
        title: "Article 4 (Ownership of Rights; Handling of Open-Source Software, etc.)",
        paras: [
          { t: "1. All rights, including copyright and other intellectual property rights, in this Data and its Parts (whether in whole or in part, and regardless of form) belong to the Rights Holder or third parties. Except as expressly provided in these Terms, the Rights Holder grants no rights whatsoever to the User." },
          { t: "2. This Data may include software or open-source software in which third parties hold rights. Such software is licensed under the individual licenses applicable to it (hereinafter \"Open-Source Licenses, etc.\"). These Terms neither restrict the User's rights under the Open-Source Licenses, etc., nor grant rights in place of them. If there is any contradiction or conflict between these Terms and an Open-Source License, etc., the latter prevails, limited to the relevant part." },
        ],
      },
      {
        id: "art-5",
        title: "Article 5 (Prohibited Acts; Termination of the License)",
        paras: [
          {
            t: "1. The User must not use this Data to commit any of the following acts:",
            sub: [
              "a. Acts that infringe the intellectual property rights (including copyrights, patent rights, and trademark rights), privacy rights, rights to one's name, portrait rights, or other rights of the Rights Holder or third parties",
              "b. Acts that violate the terms of services provided by the Rights Holder or third parties and cause damage to them",
              "c. Acts that defame or slander individuals or organizations, or that damage their honor",
              "d. Acts that violate these Terms, laws, or public order and morals, or that risk doing so",
              "e. Acts that cause disadvantage to the Rights Holder or third parties, or that damage their trust",
              "f. Acts that obstruct the distribution, updating, or suspension of publication of this Data by the Rights Holder or a third party designated by the Rights Holder",
              "g. Any other acts that the Rights Holder reasonably deems inappropriate",
            ],
          },
          { t: "2. If the User violates these Terms, the Rights Holder may terminate this License. In this case, the Rights Holder bears no responsibility for any disadvantage arising from the termination." },
        ],
      },
      {
        id: "art-6",
        title: "Article 6 (Liability for Damages; Resolution of Disputes)",
        paras: [
          { t: "1. If the User causes damage to the Rights Holder or a third party by violating these Terms, the User bears full liability for such damage, whether direct or indirect. The User shall also take measures, at the User's own responsibility and expense, to keep the damage to a minimum. If the Rights Holder gives instructions regarding such measures, the User shall follow them." },
          { t: "2. If a dispute arises between the Rights Holder and a third party because the User violated these Terms, the User shall resolve the dispute at the User's own responsibility and expense. If the Rights Holder gives instructions regarding the method of resolution, the User shall follow them." },
        ],
      },
      {
        id: "art-7",
        title: "Article 7 (Exclusion of Anti-Social Forces)",
        paras: [
          { t: "1. The User represents and warrants, now and into the future, that the User (and, in the case of a corporation, its officers and employees) does not fall under anti-social forces (meaning organized crime groups, members of organized crime groups, persons for whom five years have not passed since ceasing to be such a member, associate members of organized crime groups, companies affiliated with organized crime groups, corporate racketeers, groups engaging in criminal activities under the pretext of social campaigns, crime groups specialized in intellectual crimes, and other persons equivalent thereto; the same applies hereinafter), and that the User will not commit violent acts, fraudulent or threatening acts, obstruction of business, or other illegal acts." },
          { t: "2. The User must not provide this Data or its Parts (including modified versions) to anti-social forces, nor outsource Adjustment or Modification to them." },
          { t: "3. If the User violates any paragraph of this Article, the Rights Holder may terminate this License without any notice. In this case, the Rights Holder is not required to pay the User any compensation or indemnification, and the User shall compensate the Rights Holder for any damage incurred." },
        ],
      },
      {
        id: "art-8",
        title: "Article 8 (Governing Law, etc.)",
        paras: [
          { t: "1. These Terms are governed by the laws of Japan and shall be interpreted solely in accordance with the laws of Japan. For all disputes arising in connection with these Terms, the court in Japan that has jurisdiction over the location of the Rights Holder shall be the exclusive agreed court of first instance." },
          { t: "2. This License is granted in the Japanese language. Even where a translation of these Terms exists, the translation is attached for reference only and is in no way binding on the Rights Holder or the User. However, this does not apply to provisions of the Individual Conditions or individual instructions given under these Terms that are made only in a language other than Japanese; such provisions and instructions are excepted to that extent." },
          { t: "3. Even if any provision of these Terms or part thereof, or any individual instruction given under these Terms, is judged invalid or unenforceable under laws or regulations, the remaining provisions shall continue in full force and effect." },
        ],
      },
    ],
  },

  conds: {
    num: "03",
    title: "Individual Conditions",
    intro: "If there is any contradiction or conflict between the Individual Conditions and the General Provisions, the Individual Conditions prevail. The Special Notes prevail over all other provisions (Article 2, Paragraph 2).",
    sections: [
      {
        id: "cond-target",
        no: "1",
        title: "Licensed Data",
        body: ["The complete set of data accompanying \"NYANMAN\""],
      },
      {
        id: "cond-use",
        no: "2",
        title: "Conditions of Use",
        groups: [
          {
            no: "(1)",
            title: "Who May Use",
            items: [
              { id: "item-A", tag: "A", icon: "pic-person", text: "Use by individuals", verdict: "Permitted for both commercial and non-commercial purposes", status: "ok" },
              { id: "item-B", tag: "B", icon: "pic-building", text: "Use by corporations", verdict: "Please contact the Rights Holder individually", status: "ask" },
            ],
            after: "The above permission includes using the Data personally (including use as an avatar or other object), and using it for expressive activities that are a natural part of private life (including taking commemorative photos and videos, and posting them on the web or printing them).",
          },
          {
            no: "(2)",
            title: "Uploading to Online Services",
            items: [
              { id: "item-C", tag: "C", icon: "pic-cloud", text: "Uploading to Social Communication Platforms (including VRChat, Virtual Cast, cluster, etc.) for the purpose of personal use", verdict: "Permitted", status: "ok" },
              { id: "item-D", tag: "D", icon: "pic-game", text: "Uploading to Online Game Platforms for the purpose of personal use", verdict: "Permitted", status: "ok" },
              { id: "item-E", tag: "E", icon: "pic-users", text: "Uploading to Social Communication Platforms or Online Game Platforms for the purpose of allowing third parties to use the Data on those platforms", verdict: "Not permitted", status: "ng" },
            ],
          },
          {
            no: "(3)",
            title: "Sensitive Expression",
            items: [
              { id: "item-F", tag: "F", icon: "pic-heart", text: "Use in sexual expression", verdict: "Permitted (provided that zoning is practiced)", status: "cond" },
              { id: "item-G", tag: "G", icon: "pic-sword", text: "Use in violent expression", verdict: "Permitted (provided that zoning is practiced)", status: "cond" },
              { id: "item-H", tag: "H", icon: "pic-mega", text: "Use in political activities or religious activities", verdict: "Not permitted", status: "ng" },
            ],
          },
          {
            no: "(4)",
            title: "Processing",
            items: [
              { id: "item-I", tag: "I", icon: "pic-wrench", text: "Adjustment, polygon reduction within a range that does not impair the appearance, and file format conversion", verdict: "Permitted", status: "ok" },
              { id: "item-J", tag: "J", icon: "pic-pen", text: "Modifying this Data or its Parts, and using the modified data under the same conditions as this Data (including Modification using this Data or its Parts as the primary base)", verdict: "Permitted", status: "ok" },
              { id: "item-K", tag: "K", icon: "pic-puzzle", text: "Using this Data or its Parts for the purpose of modifying other data (including Modification using this Data or its Parts as a secondary base, with another model as the primary base)", verdict: "Permitted", status: "ok" },
              { id: "item-L", tag: "L", icon: "pic-hands", text: "Outsourcing Adjustment or Modification to a third party, and lending this Data for the purpose of such outsourcing", verdict: "Permitted when done between Users", status: "cond" },
            ],
          },
          {
            no: "(5)",
            title: "Redistribution / Distribution",
            items: [
              { id: "item-M", tag: "M", icon: "pic-share", text: "Redistribution in unmodified form", verdict: "Not permitted", status: "ng" },
              { id: "item-N", tag: "N", icon: "pic-boxpen", text: "Distributing modified versions of this Data", verdict: "Not permitted", status: "ng" },
            ],
          },
          {
            no: "(6)",
            title: "Use in Media / Products",
            items: [
              { id: "item-O", tag: "O", icon: "pic-film", text: "Use in video works, streaming (including YouTube), and broadcasting", verdict: "Permitted", status: "ok" },
              { id: "item-P", tag: "P", icon: "pic-book", text: "Use in publications and electronic publications", verdict: "Permitted", status: "ok" },
              { id: "item-Q", tag: "Q", icon: "pic-goods", text: "Use in physical goods (merchandise)", verdict: "Please contact the Rights Holder individually", status: "ask" },
              { id: "item-R", tag: "R", icon: "pic-chip", text: "Incorporating this Data into software (including games) for product development, etc., and distributing it in a state from which it cannot easily be extracted", verdict: "Please contact the Rights Holder individually", status: "ask" },
            ],
          },
          {
            no: "(7)",
            title: "Derivative Works",
            items: [
              { id: "item-S", tag: "S", icon: "pic-shirt", text: "Creating costume data, etc. for this Data by copying its meshes and weights (except where the modification is extremely minor)", verdict: "Distribution, etc. (including circulation and transmission) is permitted for both commercial and non-commercial purposes", status: "ok" },
              { id: "item-T", tag: "T", icon: "pic-palette", text: "Creating new costume data, texture data, etc. that conform to this Data's specifications, without using its meshes or weights", verdict: "Distribution, etc. (including circulation and transmission) is permitted for both commercial and non-commercial purposes", status: "ok" },
              { id: "item-U", tag: "U", icon: "pic-sparkle", text: "Creating derivative works (so-called fan works) based on this Data as a motif, without using this Data itself", verdict: "Distribution, etc. (including circulation and transmission) is permitted for both commercial and non-commercial purposes", status: "ok" },
            ],
          },
          {
            no: "(8)",
            title: "Other",
            items: [
              { id: "item-V", tag: "V", icon: "pic-credit", text: "Credit when using", verdict: "Not required, but appreciated", status: "opt" },
              { id: "item-W", tag: "W", icon: "pic-swap", text: "Transfer of rights and obligations", verdict: "Not permitted", status: "ng" },
            ],
          },
        ],
      },
      {
        id: "notes",
        no: "3",
        title: "Special Notes",
        notes: [
          { tag: "Special Note 1", text: "The permission for O. (use in video works, streaming, and broadcasting) and P. (use in publications and electronic publications) under \"6. Use in Media / Products\" is subject to the following restriction: creating content that could be mistaken for official content of Nekomasu (ねこます) or Kemomimi Oukoku (けもみみおーこく) is prohibited. Where the platform on which the content is published allows such display, please display a notice that makes it clear that the content is unofficial." },
          { tag: "Special Note 2", text: "Supplementary information regarding the permission under \"7. Derivative Works\": you may use the armature (bone) data when creating compatible costumes and similar items." },
        ],
      },
      {
        id: "cond-holder",
        no: "4",
        title: "Rights Holder and Contact",
        rows: [
          { k: "Rights Holder", v: "Nekomimi Master (ねこみみマスター)" },
          { k: "Email", v: "km33oh59@gmail.com", href: "mailto:km33oh59@gmail.com" },
          { k: "X (Twitter)", v: "https://twitter.com/km33B", href: "https://twitter.com/km33B" },
          { k: "Website", v: "https://neko28.booth.pm/", href: "https://neko28.booth.pm/" },
        ],
      },
      {
        id: "cond-credit",
        no: "5",
        title: "Credit",
        body: ["©けもみみおーこく"],
      },
      {
        id: "cond-hashtag",
        no: "6",
        title: "Recommended Hashtag",
        body: ["#NYANMAN"],
      },
      {
        id: "cond-period",
        no: "7",
        title: "License Period and Changes to the License",
        body: [
          "The license period begins on the day the person becomes a User, with no fixed term. If the Rights Holder posts changes to the conditions of these Terms (including but not limited to additions, changes, and deletions) on a website, blog, or other media managed by the Rights Holder and announces them in a reasonable manner, and the User uses this Data on or after the effective date, the User is deemed to have agreed to those changes. Accordingly, Users must periodically check the information published by the Rights Holder, within a reasonable extent.",
        ],
      },
      {
        id: "cond-version",
        no: "8",
        title: "Version of these Terms",
        body: [
          "1.00",
          "These Terms were created by Nekomimi Master using the VN3 License Terms Generator Ver. 1.11, which conforms to the VN3 License Ver. 1.10.",
        ],
      },
    ],
  },

  qa: {
    num: "04",
    title: "Frequently Asked Questions (Q&A)",
    intro: "This section provides reference information to help you understand the terms. If there is any conflict with the full terms, the full terms prevail.",
    items: [
      {
        id: "qa-1",
        q: "Can I check the terms before purchasing? At what point am I deemed to have agreed?",
        a: "You can read the full terms on this page at any time. You are deemed to have agreed to these Terms at the point when you start using the Data in any manner, including purchase, download, or installation. Minors and other persons with limited legal capacity need the prior consent of a parent or other legal representative.",
        refs: [{ label: "Preamble", href: "#preamble" }],
      },
      {
        id: "qa-2",
        q: "Can I upload it to VRChat?",
        a: "Yes. Uploading to Social Communication Platforms such as VRChat, Virtual Cast, and cluster is permitted as long as it is for your own use (C). However, uploading for the purpose of allowing third parties to use it (e.g. making the avatar publicly usable by anyone) is not permitted (E).",
        refs: [{ label: "Individual Conditions (2) C / E", href: "#item-C" }],
      },
      {
        id: "qa-3",
        q: "Can I modify it (outfit changes, texture edits, polygon reduction, etc.)?",
        a: "Yes. Both Adjustment (I) and Modification (J) are permitted. Modified data can be used under the same conditions as the original Data. Polygon reduction within a range that does not impair the appearance, and file format conversion, are also permitted.",
        refs: [{ label: "Individual Conditions (4) I / J", href: "#item-I" }],
      },
      {
        id: "qa-4",
        q: "Can I ask (commission) someone else to modify it for me?",
        a: "It is permitted only between Users (L). In other words, the person you commission must also be a User who has lawfully obtained this Data. When outsourcing, you are obligated to prohibit the contractor from using the Data for any other purpose, and you are jointly and severally liable for the contractor's actions (Article 2, Paragraph 5).",
        refs: [{ label: "Individual Conditions (4) L", href: "#item-L" }, { label: "Article 2, Paragraph 5", href: "#art-2" }],
      },
      {
        id: "qa-5",
        q: "Can I use NYANMAN's parts to modify another avatar?",
        a: "Yes. Using this Data or its Parts for the purpose of modifying other data (using this Data as a secondary base with another model as the primary base) is permitted (K). However, you may not distribute the data created in this way (N).",
        refs: [{ label: "Individual Conditions (4) K", href: "#item-K" }, { label: "Individual Conditions (5) N", href: "#item-N" }],
      },
      {
        id: "qa-6",
        q: "Can I give the data to a friend or distribute it?",
        a: "No. Redistribution and distribution of this Data, whether unmodified or modified, are not permitted (M / N). Anyone who wants to use it must purchase it through legitimate means.",
        refs: [{ label: "Individual Conditions (5) M / N", href: "#item-M" }],
      },
      {
        id: "qa-7",
        q: "Can I use it on multiple PCs or accounts of my own?",
        a: "The license under these Terms is granted per User (the individual or corporation that lawfully obtained this Data). As long as the use is your own personal use, no limit on the number of devices or accounts is stipulated.",
        refs: [{ label: "Article 1 \"User\"", href: "#art-1" }, { label: "Article 2, Paragraph 1", href: "#art-2" }],
      },
      {
        id: "qa-8",
        q: "Can I use it in streams and videos (YouTube, etc.)?",
        a: "Yes. Use in video works, streaming, and broadcasting is permitted (O). However, under Special Note 1, creating content that could be mistaken for official content of Nekomasu (ねこます) or Kemomimi Oukoku (けもみみおーこく) is prohibited. Where the platform allows it, please display a notice making clear that your content is unofficial.",
        refs: [{ label: "Individual Conditions (6) O", href: "#item-O" }, { label: "Special Note 1", href: "#notes" }],
      },
      {
        id: "qa-9",
        q: "Can I make and sell merchandise?",
        a: "Use in physical goods (merchandise) requires individual consultation with the Rights Holder (Q). The same applies to incorporation into software such as games (R). Please contact us using the contact information below.",
        refs: [{ label: "Individual Conditions (6) Q / R", href: "#item-Q" }, { label: "Contact", href: "#cond-holder" }],
      },
      {
        id: "qa-10",
        q: "Can it be used by a company / corporation?",
        a: "Use by corporations requires individual consultation with the Rights Holder (B). Please contact us with details of the intended purpose and form of use.",
        refs: [{ label: "Individual Conditions (1) B", href: "#item-B" }, { label: "Contact", href: "#cond-holder" }],
      },
      {
        id: "qa-11",
        q: "Can I create and distribute / sell compatible costumes and textures?",
        a: "Yes. Creating costume data by copying this Data's meshes and weights (S, except where the modification is extremely minor), and creating new spec-conforming costumes and textures without reusing meshes or weights (T), are both permitted, including distribution for commercial or non-commercial purposes. You may also use the armature (bone) data when creating compatible costumes (Special Note 2).",
        refs: [{ label: "Individual Conditions (7) S / T", href: "#item-S" }, { label: "Special Note 2", href: "#notes" }],
      },
      {
        id: "qa-12",
        q: "Can I create fan works (illustrations, comics, etc.)?",
        a: "Yes. Creating derivative works (so-called fan works) based on this Data as a motif is permitted, including distribution, whether commercial or non-commercial (U). When posting, we would be happy if you used the recommended hashtag \"#NYANMAN\".",
        refs: [{ label: "Individual Conditions (7) U", href: "#item-U" }, { label: "Recommended Hashtag", href: "#cond-hashtag" }],
      },
      {
        id: "qa-13",
        q: "Can I use it for sexual (R-18) or violent expression?",
        a: "It is permitted, on the condition that zoning is practiced (F / G). Please take care that such content does not reach unintended audiences, for example by using age restrictions or sensitive-content settings. Use in political or religious activities is not permitted (H).",
        refs: [{ label: "Individual Conditions (3) F / G / H", href: "#item-F" }],
      },
      {
        id: "qa-14",
        q: "Is credit required?",
        a: "No, it is not required — but it is appreciated (V). If you do give credit, please use \"©けもみみおーこく\".",
        refs: [{ label: "Individual Conditions (8) V", href: "#item-V" }, { label: "Credit", href: "#cond-credit" }],
      },
      {
        id: "qa-15",
        q: "Can the terms change?",
        a: "Yes. If the Rights Holder posts changes on a website or blog and announces them, you are deemed to have agreed to the changes when you use the Data on or after their effective date. Please check the Rights Holder's announcements periodically, within a reasonable extent.",
        refs: [{ label: "Individual Conditions 7", href: "#cond-period" }],
      },
      {
        id: "qa-16",
        q: "If a translation differs from the Japanese version, which prevails?",
        a: "The Japanese version is the official text. Translations are provided for reference only and are not binding on the Rights Holder or the User (Article 8, Paragraph 2).",
        refs: [{ label: "Article 8, Paragraph 2", href: "#art-8" }],
      },
    ],
  },

  info: {
    num: "05",
    title: "Revision History",
    history: [
      { ver: "1.00", date: "2026-08-28", note: "Established" },
    ],
  },

  footer: {
    lines: [
      "©けもみみおーこく",
      "NYANMAN License Terms Ver 1.00",
    ],
  },
};
