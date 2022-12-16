export const article = {
	title: "Ovarian cancer mutational processes drive site-specific immune evasion",
	states: {
		totalAccess: 1774,
		altmetric: 65,
		access: "Open Access",
		publishedOn: "14 December 2022",
		type: "Article",
	},
	authors: [
		{
			name: "Ignacio Vázquez-García",
			info: "Computational Oncology, Department of Epidemiology and Biostatistics, Memorial Sloan Kettering Cancer Center, New York, NY, USA",
		},
		{
			name: "Florian Uhlitz",
			info: "Computational Oncology, Department of Epidemiology and Biostatistics, Memorial Sloan Kettering Cancer Center, New York, NY, USA",
		},
		{
			name: "Nicholas Ceglia",
			info: "Computational Oncology, Department of Epidemiology and Biostatistics, Memorial Sloan Kettering Cancer Center, New York, NY, USA",
		},
		{
			name: "Jamie L. P. Lim",
			info: "Computational Oncology, Department of Epidemiology and Biostatistics, Memorial Sloan Kettering Cancer Center, New York, NY, USA",
		},
		{
			name: "Jamie L. P. Lim",
			info: "Computational Oncology, Department of Epidemiology and Biostatistics, Memorial Sloan Kettering Cancer Center, New York, NY, USA",
		},
		{
			name: "Jamie L. P. Lim",
			info: "Computational Oncology, Department of Epidemiology and Biostatistics, Memorial Sloan Kettering Cancer Center, New York, NY, USA",
		},
		{
			name: "Juliana Niyazov",
			info: "Computational Oncology, Department of Epidemiology and Biostatistics, Memorial Sloan Kettering Cancer Center, New York, NY, USA",
		},
		{
			name: "Vance Broach",
			info: "Computational Oncology, Department of Epidemiology and Biostatistics, Memorial Sloan Kettering Cancer Center, New York, NY, USA",
		},
		{
			name: "Vance Broach",
			info: "Computational Oncology, Department of Epidemiology and Biostatistics, Memorial Sloan Kettering Cancer Center, New York, NY, USA",
		},
	],
	contents: [
		{
			type: "section",
			title: "Abstract",
			id: "abstract",
			content:
				"High-grade serous ovarian cancer (HGSOC) is an archetypal cancer of genomic instability1,2,3,4 patterned by distinct mutational processes5,6, tumour heterogeneity7,8,9 and intraperitoneal spread7,8,10. Immunotherapies have had limited efficacy in HGSOC11,12,13, highlighting an unmet need to assess how mutational processes and the anatomical sites of tumour foci determine the immunological states of the tumour microenvironment. Here we carried out an integrative analysis of whole-genome sequencing, single-cell RNA sequencing, digital histopathology and multiplexed immunofluorescence of 160 tumour sites from 42 treatment-naive patients with HGSOC. Homologous recombination-deficient HRD-Dup (BRCA1 mutant-like) and HRD-Del (BRCA2 mutant-like) tumours harboured inflammatory signalling and ongoing immunoediting, reflected in loss of HLA diversity and tumour infiltration with highly differentiated dysfunctional CD8+ T cells. By contrast, foldback-inversion-bearing tumours exhibited elevated immunosuppressive TGFβ signalling and immune exclusion, with predominantly naive/stem-like and memory T cells. Phenotypic state associations were specific to anatomical sites, highlighting compositional, topological and functional differences between adnexal tumours and distal peritoneal foci. Our findings implicate anatomical sites and mutational processes as determinants of evolutionary phenotypic divergence and immune resistance mechanisms in HGSOC. Our study provides a multi-omic cellular phenotype data substrate from which to develop and interpret future personalized immunotherapeutic approaches and early detection research.",
		},{
			type: "figure",
			figNum: 1,
			title: "Site specificity of immunophenotypes.",
			image: "https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41586-022-05496-1/MediaObjects/41586_2022_5496_Fig2_HTML.png",
			link: "https://www.nature.com/articles/s41586-022-05496-1/figures/2",
			content:
				"a, UMAP plot of T and NK cell clusters profiled by scRNA-seq. Clusters are coloured and numbered to reference cluster labels in c. b, Pairwise comparisons of kernel density estimates in UMAP space. c, Left, heatmap of average T cell state module scores (left) and signalling pathway activity scores (right) across CD4+ T, CD8+ T, innate lymphoid cell (ILC), NK and cycling cell clusters. Right, dot plot showing site-specific enrichment of T and NK cell clusters based on GLM. The colour gradient indicates the log2-transformed odds ratio (red, enrichment; blue, depletion), and sizes indicate the Bonferroni-corrected –log10(P value). d, Intra-sample diversity of T and NK cell clusters estimated by Shannon entropy with samples grouped by site (patient and sample counts shown) and intra- and inter-patient dissimilarity of T and NK cell cluster composition for pairs of samples, estimated using the Bray–Curtis distance (patient and sample pair counts shown). Pairwise dissimilarity is shown for all heterotypic pairs of sites (adnexa versus non-adnexa, adnexa versus ascites, non-adnexa versus ascites). Violin plots show the median, top and bottom quartiles; whiskers correspond to 1.5× IQR. *P < 0.05, **P < 0.01, ***P < 0.001, ****P < 0.0001. e, Top, diffusion maps of the subset of CD8+ T cells profiled by scRNA-seq, with cells coloured by CD8+ T cell cluster and pseudotime. Bottom, relative expression of genes marking CD8+ T cell clusters in diffusion space. DC, diffusion component. f, Scaled module scores with respect to pseudotime.",
		},
		{
			type: "section",
			title: "Main",
			id: "main",
			content:
				"High-grade serous ovarian cancer (HGSOC) is an archetypal cancer of genomic instability1,2,3,4 patterned by distinct mutational processes5,6, tumour heterogeneity7,8,9 and intraperitoneal spread7,8,10. Immunotherapies have had limited efficacy in HGSOC11,12,13, highlighting an unmet need to assess how mutational processes and the anatomical sites of tumour foci determine the immunological states of the tumour microenvironment. Here we carried out an integrative analysis of whole-genome sequencing, single-cell RNA sequencing, digital histopathology and multiplexed immunofluorescence of 160 tumour sites from 42 treatment-naive patients with HGSOC. Homologous recombination-deficient HRD-Dup (BRCA1 mutant-like) and HRD-Del (BRCA2 mutant-like) tumours harboured inflammatory signalling and ongoing immunoediting, reflected in loss of HLA diversity and tumour infiltration with highly differentiated dysfunctional CD8+ T cells. By contrast, foldback-inversion-bearing tumours exhibited elevated immunosuppressive TGFβ signalling and immune exclusion, with predominantly naive/stem-like and memory T cells. Phenotypic state associations were specific to anatomical sites, highlighting compositional, topological and functional differences between adnexal tumours and distal peritoneal foci. Our findings implicate anatomical sites and mutational processes as determinants of evolutionary phenotypic divergence and immune resistance mechanisms in HGSOC. Our study provides a multi-omic cellular phenotype data substrate from which to develop and interpret future personalized immunotherapeutic approaches and early detection research.",
		},
		{
			type: "figure",
			figNum: 2,
			title: "Mutational signatures as determinants of immunophenotypes.",
			image: "https://media.springernature.com/lw685/springer-static/image/art%3A10.1038%2Fs41586-022-05496-1/MediaObjects/41586_2022_5496_Fig4_HTML.png",
			link: "https://www.nature.com/articles/s41586-022-05496-1/figures/4",
			content:
				"a, Differences in kernel density estimates in UMAP space for pairwise comparisons of mutational signatures. b, Estimated effects of mutational signature and anatomical site on T and NK cell cluster composition based on a GLM, with models fitted excluding ascites samples. The colour gradient indicates the log2-transformed odds ratio (red, enrichment; blue, depletion), and sizes indicate the Bonferroni-corrected –log10(P value). c, Distributions of CD8+ T cell state module scores and JAK–STAT signalling pathway activity scores with respect to mutational signature (patient counts shown). d, Scaled module scores within the subset of CD8+ T cells with respect to pseudotime and mutational signature. e, Correlation of JAK–STAT signalling scores in CD8+ T cells in CD45+ samples with those in cancer cells in matched CD45− samples. f, Left, intra-sample diversity of T and NK cell clusters in adnexal and non-adnexal samples estimated by Shannon entropy, with samples grouped by mutational signature (patient and sample counts shown). Right, intra- and inter-patient dissimilarity in T and NK cell cluster composition, with samples grouped by mutational signature, estimated using the Bray–Curtis distance. Pairwise dissimilarity is shown for all pairs of sites (patient and sample pair counts shown) excluding ascites (top) and for adnexal versus non-adnexal pairs of sites (bottom). g, Spatial density of CD8+ T cell phenotypes in adnexal and non-adnexal mpIF samples as a function of distance to the tumour–stroma interface, with samples grouped by mutational signature (Methods). In c and f, box plots and violin plots show the median, top and bottom quartiles",
		},{
			type: "section",
			title: "Mutational processes drive immunoediting",
			id: "main",
			content:
				"We next investigated whether increased immune signalling in HRD subtypes led to mechanisms mediating immune escape. We profiled loss of HLA presentation machinery24 inferred through loss of heterozygosity (LOH) of chromosome arm 6p—harbouring HLA class I and class II genes—at the single-cell level using the SIGNALS algorithm5. Predictions were restricted to cancer cells (Fig. 5a), with per-cell B-allele fractions (BAFs) classed as balanced, imbalanced or LOH (Extended Data Fig. 12a,b) and orthogonal genomic validation from site-matched WGS and MSK-IMPACT datasets (Extended Data Fig. 12c–f). We observed marked inter-patient heterogeneity (Fig. 5b,c and Extended Data Fig. 12a,b), with clonal 6p LOH in 4 of 41 patients (10%) and subclonal 6p LOH in 7 of 41 patients (17%; Fig. 5c, left). Intriguingly, site-specific losses were found in 4 of 41 patients (Fig. 5c, right). Clonal 6p LOH was primarily observed in HRD-Dup cases, whereas subclonal distributions were more frequent in patients with FBI tumours (Fig. 5c). Higher prevalence of 6p LOH in HRD-Dup was validated in an independent cohort (n = 1,298 patients) with available MSK-IMPACT sequencing (31% in BRCA1-mutant cases, 19% in BRCA2-mutant cases and 24% in CCNE1-amplified cases Fig. 5d). Notably, clonal 6p LOH was present in adnexal lesions in 5 of 47 samples (Fig. 5e), in line with ‘early’ immune evolutionary selection in the primary site. Patient 022 with the HRD-Dup subtype and patient 065 with the FBI subtype further showed patient-specific evolutionary timing of 6p LOH (Fig. 5f). Functional consequences of 6p LOH in HRD-Dup were also observed, including upregulation of JAK–STAT signalling (Extended Data Fig. 12g,h), which was most pronounced in bowel samples (Extended Data Fig. 12i), and increased presence of dysfunctional CD4+ and CD8+ T cells (Fig. 5g). Together, association of LOH of HLA alleles with heightened JAK–STAT signalling and T cell dysfunction points to ‘early’ immune-mediated evolutionary selection of 6p loss in HRD-Dup tumours, in contrast to evolutionarily ‘late’ clonal expansion of 6p LOH in FBI tumours.",
		},
	],
about: {}
};
