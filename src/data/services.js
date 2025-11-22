export const servicesData = [
    {
        id: 'visa',
        name: 'Visa & Immigration',
        description: 'Complete visa and immigration services for tourists, residents, and families',
        icon: 'flight',
        color: '#6D5DF6',
        serviceTypes: [
            {
                id: 'entry_permits',
                name: 'Entry Permits',
                description: 'Initial entry permits for employment, investors, and family',
                icon: 'badge',
                categoryId: 'visa',
                subServices: [
                    {
                        id: 'visa_entry_permit_employment_new',
                        name: 'New Employment Visa',
                        description: 'Initial approval to enter UAE for employment.',
                        icon: 'work',
                        serviceTypeId: 'entry_permits',
                        premium: { cost: 680, timeline: '1 day (express)' },
                        standard: { cost: 530, timeline: '1–2 working days' },
                        documentRequirements: [
                            'Passport', 'Photo', 'Contract', 'Establishment Card', 'License Copy'
                        ]
                    },
                    {
                        id: 'visa_entry_permit_investor',
                        name: 'Investor / Partner Visa',
                        description: 'Entry permit for business partners/shareholders.',
                        icon: 'business_center',
                        serviceTypeId: 'entry_permits',
                        premium: { cost: 870, timeline: '1 day (express)' },
                        standard: { cost: 670, timeline: '1–2 days' },
                        documentRequirements: [
                            'Passport', 'Photo', 'Trade License', 'MOA', 'Establishment Card'
                        ]
                    },
                    {
                        id: 'visa_entry_permit_family',
                        name: 'Family Visa (Wife/Child)',
                        description: 'Entry permit for dependents.',
                        icon: 'family_restroom',
                        serviceTypeId: 'entry_permits',
                        premium: { cost: 800, timeline: '1 day (express)' },
                        standard: { cost: 650, timeline: '1–2 days' },
                        documentRequirements: [
                            'Sponsor Passport', 'Emirates ID', 'Salary Certificate', 'Tenancy Contract', 'EJARI', 'Marriage/Birth Certificate'
                        ]
                    }
                ]
            },
            {
                id: 'status_change',
                name: 'Status Change',
                description: 'Change visa status without exiting or via airport-to-airport',
                icon: 'published_with_changes',
                categoryId: 'visa',
                subServices: [
                    {
                        id: 'visa_status_change_internal',
                        name: 'Internal Status Change',
                        description: 'Change visit to residency without exit.',
                        icon: 'sync_alt',
                        serviceTypeId: 'status_change',
                        premium: { cost: 980, timeline: 'Same day (priority)' },
                        standard: { cost: 830, timeline: 'Same day' },
                        documentRequirements: [
                            'Passport', 'Entry Permit'
                        ]
                    },
                    {
                        id: 'visa_status_change_a2a',
                        name: 'Airport to Airport (A2A)',
                        description: 'Status change via airport exit.',
                        icon: 'flight_takeoff',
                        serviceTypeId: 'status_change',
                        premium: { cost: 250, timeline: 'Same day (priority)' },
                        standard: { cost: 150, timeline: 'Same day' },
                        documentRequirements: [
                            'Passport', 'Entry Permit'
                        ]
                    }
                ]
            },
            {
                id: 'medical_eid',
                name: 'Medical & Emirates ID',
                description: 'Medical fitness tests and Emirates ID processing',
                icon: 'medical_services',
                categoryId: 'visa',
                subServices: [
                    {
                        id: 'visa_medical_normal',
                        name: 'Medical Test – Normal',
                        description: 'Standard medical fitness test.',
                        icon: 'health_and_safety',
                        serviceTypeId: 'medical_eid',
                        premium: { cost: 500, timeline: '12 hours' },
                        standard: { cost: 400, timeline: '24 hours' },
                        documentRequirements: [
                            'Passport', 'Entry Permit'
                        ]
                    },
                    {
                        id: 'visa_medical_vip',
                        name: 'Medical Test – VIP',
                        description: 'Fast-track medical fitness test.',
                        icon: 'star',
                        serviceTypeId: 'medical_eid',
                        premium: { cost: 850, timeline: '2 hours' },
                        standard: { cost: 750, timeline: '4–6 hours' },
                        documentRequirements: [
                            'Passport'
                        ]
                    },
                    {
                        id: 'visa_eid_biometrics_new',
                        name: 'Emirates ID Biometrics – New',
                        description: 'Biometrics appointment for new Emirates ID.',
                        icon: 'fingerprint',
                        serviceTypeId: 'medical_eid',
                        premium: { cost: 520, timeline: 'Priority Appointment' },
                        standard: { cost: 420, timeline: '1 day' },
                        documentRequirements: [
                            'Passport', 'Entry permit'
                        ]
                    },
                    {
                        id: 'visa_eid_print_1year',
                        name: 'Emirates ID Printing – 1 Year',
                        description: 'Printing of 1-year Emirates ID.',
                        icon: 'badge',
                        serviceTypeId: 'medical_eid',
                        premium: { cost: 320, timeline: '1 day' },
                        standard: { cost: 220, timeline: '2–3 days' },
                        documentRequirements: [
                            'Biometrics completed'
                        ]
                    },
                    {
                        id: 'visa_eid_print_2year',
                        name: 'Emirates ID Printing – 2 Year',
                        description: 'Printing of 2-year Emirates ID.',
                        icon: 'badge',
                        serviceTypeId: 'medical_eid',
                        premium: { cost: 420, timeline: '1 day' },
                        standard: { cost: 320, timeline: '2–3 days' },
                        documentRequirements: []
                    },
                    {
                        id: 'visa_eid_print_3year',
                        name: 'Emirates ID Printing – 3 Year',
                        description: 'Printing of 3-year Emirates ID.',
                        icon: 'badge',
                        serviceTypeId: 'medical_eid',
                        premium: { cost: 520, timeline: '1 day' },
                        standard: { cost: 420, timeline: '2–3 days' },
                        documentRequirements: []
                    }
                ]
            },
            {
                id: 'residency_stamping',
                name: 'Residency Stamping & Renewal',
                description: 'Visa stamping and renewal services',
                icon: 'verified',
                categoryId: 'visa',
                subServices: [
                    {
                        id: 'visa_stamping_normal',
                        name: 'Visa Stamping – Normal',
                        description: 'Standard residency visa stamping.',
                        icon: 'approval',
                        serviceTypeId: 'residency_stamping',
                        premium: { cost: 750, timeline: '2 days' },
                        standard: { cost: 650, timeline: '3–5 days' },
                        documentRequirements: [
                            'Medical report', 'Biometrics', 'Photo'
                        ]
                    },
                    {
                        id: 'visa_stamping_urgent',
                        name: 'Visa Stamping – Urgent',
                        description: 'Urgent residency visa stamping.',
                        icon: 'bolt',
                        serviceTypeId: 'residency_stamping',
                        premium: { cost: 900, timeline: 'Same day' },
                        standard: { cost: 800, timeline: '1 day' },
                        documentRequirements: []
                    },
                    {
                        id: 'visa_renewal_employment',
                        name: 'Visa Renewal – Employment',
                        description: 'Renewal of employment visa.',
                        icon: 'autorenew',
                        serviceTypeId: 'residency_stamping',
                        premium: { cost: 950, timeline: '2 days' },
                        standard: { cost: 800, timeline: '3–5 days' },
                        documentRequirements: [
                            'Passport', 'EID', 'Photo'
                        ]
                    },
                    {
                        id: 'visa_renewal_investor',
                        name: 'Visa Renewal – Investor',
                        description: 'Renewal of investor visa.',
                        icon: 'autorenew',
                        serviceTypeId: 'residency_stamping',
                        premium: { cost: 1100, timeline: '2 days' },
                        standard: { cost: 950, timeline: '3–5 days' },
                        documentRequirements: []
                    },
                    {
                        id: 'visa_renewal_family',
                        name: 'Visa Renewal – Family',
                        description: 'Renewal of family visa.',
                        icon: 'autorenew',
                        serviceTypeId: 'residency_stamping',
                        premium: { cost: 900, timeline: '2 days' },
                        standard: { cost: 750, timeline: '3–5 days' },
                        documentRequirements: [
                            'Sponsor salary proof'
                        ]
                    }
                ]
            },
            {
                id: 'cancellation_fines',
                name: 'Cancellation & Fines',
                description: 'Visa cancellation and fine management',
                icon: 'cancel',
                categoryId: 'visa',
                subServices: [
                    {
                        id: 'visa_cancel_inside',
                        name: 'Visa Cancellation – Inside UAE',
                        description: 'Cancelling visa while inside UAE.',
                        icon: 'block',
                        serviceTypeId: 'cancellation_fines',
                        premium: { cost: 260, timeline: 'Priority' },
                        standard: { cost: 160, timeline: 'Same day' },
                        documentRequirements: [
                            'Passport copy', 'EID', 'Company license'
                        ]
                    },
                    {
                        id: 'visa_cancel_outside',
                        name: 'Visa Cancellation – Outside UAE',
                        description: 'Cancelling visa when person is outside UAE.',
                        icon: 'block',
                        serviceTypeId: 'cancellation_fines',
                        premium: { cost: 280, timeline: 'Priority' },
                        standard: { cost: 180, timeline: 'Same day' },
                        documentRequirements: [
                            'Passport copy', 'EID copy'
                        ]
                    },
                    {
                        id: 'visa_overstay_payment',
                        name: 'Overstay Fine Check & Payment',
                        description: 'Checking and paying overstay fines.',
                        icon: 'payments',
                        serviceTypeId: 'cancellation_fines',
                        premium: { cost: 'Fine + 100', timeline: 'Priority' },
                        standard: { cost: 'Fine + 50', timeline: 'Same day' },
                        documentRequirements: [
                            'Passport', 'UID number'
                        ]
                    },
                    {
                        id: 'visa_fine_waiver',
                        name: 'Visa Fine Waiver Request',
                        description: 'Request for waiver of fines.',
                        icon: 'request_quote',
                        serviceTypeId: 'cancellation_fines',
                        premium: { cost: 200, timeline: 'Priority' },
                        standard: { cost: 100, timeline: '3–7 days' },
                        documentRequirements: [
                            'Passport', 'EID', 'Supporting documents'
                        ]
                    }
                ]
            },
            {
                id: 'tourist_visas',
                name: 'Tourist Visas',
                description: 'Short and long term tourist visas',
                icon: 'tour',
                categoryId: 'visa',
                subServices: [
                    {
                        id: 'visa_tourist_30d',
                        name: 'Tourist Visa – 30 Days',
                        description: '30-day UAE tourist entry permit.',
                        icon: 'confirmation_number',
                        serviceTypeId: 'tourist_visas',
                        premium: { cost: 450, timeline: 'Express' },
                        standard: { cost: 350, timeline: '1 day' },
                        documentRequirements: [
                            'Passport', 'Photo'
                        ]
                    },
                    {
                        id: 'visa_tourist_60d',
                        name: 'Tourist Visa – 60 Days',
                        description: '60-day UAE tourist visa.',
                        icon: 'confirmation_number',
                        serviceTypeId: 'tourist_visas',
                        premium: { cost: 570, timeline: 'Express' },
                        standard: { cost: 470, timeline: '1 day' },
                        documentRequirements: [
                            'Passport', 'Photo'
                        ]
                    },
                    {
                        id: 'visa_tourist_ext_30d',
                        name: 'Tourist Visa Extension – 30 Days',
                        description: 'Extension of tourist visa (no exit).',
                        icon: 'update',
                        serviceTypeId: 'tourist_visas',
                        premium: { cost: 820, timeline: 'Express' },
                        standard: { cost: 720, timeline: '1 day' },
                        documentRequirements: [
                            'Passport copy'
                        ]
                    },
                    {
                        id: 'visa_tourist_ext_60d',
                        name: 'Tourist Visa Extension – 60 Days',
                        description: '60-day tourist visa extension.',
                        icon: 'update',
                        serviceTypeId: 'tourist_visas',
                        premium: { cost: 1200, timeline: 'Express' },
                        standard: { cost: 1100, timeline: '1 day' },
                        documentRequirements: [
                            'Passport copy'
                        ]
                    },
                    {
                        id: 'visa_voa_extension',
                        name: 'Visa On Arrival Extension',
                        description: 'Extending visa-on-arrival (Indian Passport).',
                        icon: 'update',
                        serviceTypeId: 'tourist_visas',
                        premium: { cost: 350, timeline: 'Express' },
                        standard: { cost: 250, timeline: 'Same day' },
                        documentRequirements: [
                            'Passport'
                        ]
                    }
                ]
            },
            {
                id: 'golden_green_visas',
                name: 'Golden & Green Visas',
                description: 'Long-term residency options',
                icon: 'diamond',
                categoryId: 'visa',
                subServices: [
                    {
                        id: 'visa_golden_10yr_investor',
                        name: 'Golden Visa – 10 Year (Investor)',
                        description: 'Long-term residency for investors.',
                        icon: 'stars',
                        serviceTypeId: 'golden_green_visas',
                        premium: { cost: 5000, timeline: 'Priority' },
                        standard: { cost: 4500, timeline: '7–14 days' },
                        documentRequirements: [
                            'Passport', 'EID', 'Photo', 'Investment Proof'
                        ]
                    },
                    {
                        id: 'visa_golden_specialist',
                        name: 'Golden Visa – Specialist',
                        description: 'Golden visa for specialists with MOHRE approval.',
                        icon: 'stars',
                        serviceTypeId: 'golden_green_visas',
                        premium: { cost: 5000, timeline: 'Priority' },
                        standard: { cost: 4500, timeline: '10–14 days' },
                        documentRequirements: [
                            'Academic certificates', 'Recognition letters'
                        ]
                    },
                    {
                        id: 'visa_golden_talent',
                        name: 'Golden Visa – Outstanding Talent',
                        description: 'Golden visa for exceptional talents.',
                        icon: 'stars',
                        serviceTypeId: 'golden_green_visas',
                        premium: { cost: 5000, timeline: 'Priority' },
                        standard: { cost: 4500, timeline: '10–14 days' },
                        documentRequirements: [
                            'Talent proof'
                        ]
                    },
                    {
                        id: 'visa_green_5yr_investor',
                        name: 'Green Visa – 5 Year (Investor)',
                        description: '5-year green visa for investors or partners.',
                        icon: 'eco',
                        serviceTypeId: 'golden_green_visas',
                        premium: { cost: 3100, timeline: 'Priority' },
                        standard: { cost: 2800, timeline: '5–10 days' },
                        documentRequirements: [
                            'Passport', 'Trade License', 'MOA'
                        ]
                    },
                    {
                        id: 'visa_green_skilled_employee',
                        name: 'Green Visa – Skilled Employee',
                        description: '5-year visa for skilled employees.',
                        icon: 'eco',
                        serviceTypeId: 'golden_green_visas',
                        premium: { cost: 2900, timeline: 'Priority' },
                        standard: { cost: 2600, timeline: '5–7 days' },
                        documentRequirements: [
                            'Labor contract', 'Degree', 'Payslip'
                        ]
                    }
                ]
            },
            {
                id: 'other_visa_services',
                name: 'Other Visa Services',
                description: 'Transfers, corrections, and updates',
                icon: 'more_horiz',
                categoryId: 'visa',
                subServices: [
                    {
                        id: 'visa_transfer_company',
                        name: 'Visa Transfer – Company to Company',
                        description: 'Transfer of an employee visa between companies.',
                        icon: 'swap_horiz',
                        serviceTypeId: 'other_visa_services',
                        premium: { cost: 1500, timeline: 'Priority' },
                        standard: { cost: 1300, timeline: '5–7 days' },
                        documentRequirements: [
                            'Labour Contract', 'Passport', 'EID'
                        ]
                    },
                    {
                        id: 'visa_correction',
                        name: 'Visa Correction',
                        description: 'Correcting errors in visa or residence file.',
                        icon: 'edit',
                        serviceTypeId: 'other_visa_services',
                        premium: { cost: 330, timeline: 'Priority' },
                        standard: { cost: 230, timeline: '1–2 days' },
                        documentRequirements: [
                            'Passport', 'EID'
                        ]
                    },
                    {
                        id: 'visa_lost_passport_update',
                        name: 'Lost Passport – File Update',
                        description: 'Updating lost passport information.',
                        icon: 'find_replace',
                        serviceTypeId: 'other_visa_services',
                        premium: { cost: 370, timeline: 'Priority' },
                        standard: { cost: 270, timeline: '1–2 days' },
                        documentRequirements: [
                            'Police report', 'New Passport'
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'gov_hr',
        name: 'Government HR / MOHRE',
        description: 'Ministry of Human Resources & Emiratisation services',
        icon: 'groups',
        color: '#7E57C2',
        serviceTypes: [
            {
                id: 'work_permits',
                name: 'Work Permits',
                description: 'New work permits for skilled, unskilled, and teen employees',
                icon: 'work_outline',
                categoryId: 'gov_hr',
                subServices: [
                    {
                        id: 'mohre_work_permit_skilled',
                        name: 'New Work Permit – Skilled',
                        description: 'MOHRE approval to hire a skilled employee.',
                        icon: 'engineering',
                        serviceTypeId: 'work_permits',
                        premium: { cost: 603, timeline: '1 day' },
                        standard: { cost: 503, timeline: '1–2 working days' },
                        documentRequirements: [
                            'Passport', 'Photo', 'Education Certificate', 'Offer Letter'
                        ]
                    },
                    {
                        id: 'mohre_work_permit_unskilled',
                        name: 'New Work Permit – Unskilled',
                        description: 'Work permit for unskilled labor category workers.',
                        icon: 'construction',
                        serviceTypeId: 'work_permits',
                        premium: { cost: 503, timeline: '1 day' },
                        standard: { cost: 403, timeline: '1–2 days' },
                        documentRequirements: [
                            'Passport', 'Offer Letter'
                        ]
                    },
                    {
                        id: 'mohre_work_permit_teen',
                        name: 'Teenager Permit (15–18 years)',
                        description: 'Hiring permit for minors.',
                        icon: 'school',
                        serviceTypeId: 'work_permits',
                        premium: { cost: 350, timeline: '1 day' },
                        standard: { cost: 250, timeline: '2–3 days' },
                        documentRequirements: [
                            'Passport', 'School NOC', 'Parent Consent'
                        ]
                    }
                ]
            },
            {
                id: 'labour_contracts',
                name: 'Labour Contracts',
                description: 'Typing, amendment, and renewal of labor contracts',
                icon: 'description',
                categoryId: 'gov_hr',
                subServices: [
                    {
                        id: 'mohre_contract_new',
                        name: 'New Contract Typing',
                        description: 'Typing of a new labor contract.',
                        icon: 'post_add',
                        serviceTypeId: 'labour_contracts',
                        premium: { cost: 250, timeline: 'Same day' },
                        standard: { cost: 150, timeline: '1 day' },
                        documentRequirements: [
                            'Passport', 'Offer Letter'
                        ]
                    },
                    {
                        id: 'mohre_contract_amend',
                        name: 'Contract Amendment',
                        description: 'Updating salary, designation, or contract terms.',
                        icon: 'edit_note',
                        serviceTypeId: 'labour_contracts',
                        premium: { cost: 220, timeline: 'Same day' },
                        standard: { cost: 120, timeline: '1–2 days' },
                        documentRequirements: [
                            'Passport', 'Old Contract'
                        ]
                    },
                    {
                        id: 'mohre_contract_renew',
                        name: 'Contract Renewal Typing',
                        description: 'Renewal of MOHRE contract.',
                        icon: 'autorenew',
                        serviceTypeId: 'labour_contracts',
                        premium: { cost: 250, timeline: 'Same day' },
                        standard: { cost: 150, timeline: '1 day' },
                        documentRequirements: [
                            'Passport', 'EID', 'Old Contract'
                        ]
                    }
                ]
            },
            {
                id: 'labour_cards',
                name: 'Labour Cards',
                description: 'Issuance, renewal, and cancellation of labor cards',
                icon: 'badge',
                categoryId: 'gov_hr',
                subServices: [
                    {
                        id: 'mohre_labour_card_new',
                        name: 'Labour Card Issuance',
                        description: 'Issuance of new labor card after visa stamping.',
                        icon: 'add_card',
                        serviceTypeId: 'labour_cards',
                        premium: { cost: 453, timeline: 'Priority' },
                        standard: { cost: 353, timeline: '1–2 days' },
                        documentRequirements: [
                            'Passport', 'EID'
                        ]
                    },
                    {
                        id: 'mohre_labour_card_renew',
                        name: 'Labour Card Renewal',
                        description: 'Renewing expired labor card.',
                        icon: 'credit_card_off',
                        serviceTypeId: 'labour_cards',
                        premium: { cost: 453, timeline: 'Priority' },
                        standard: { cost: 353, timeline: '1–2 days' },
                        documentRequirements: [
                            'Passport', 'EID'
                        ]
                    },
                    {
                        id: 'mohre_labour_card_cancel',
                        name: 'Labour Card Cancellation',
                        description: 'Cancelling labor card for visa cancellation.',
                        icon: 'remove_circle_outline',
                        serviceTypeId: 'labour_cards',
                        premium: { cost: 273, timeline: 'Priority' },
                        standard: { cost: 173, timeline: 'Same day' },
                        documentRequirements: [
                            'Passport', 'EID'
                        ]
                    },
                    {
                        id: 'mohre_labour_card_duplicate',
                        name: 'Lost Labour Card Replacement',
                        description: 'Duplicate card issuance.',
                        icon: 'content_copy',
                        serviceTypeId: 'labour_cards',
                        premium: { cost: 300, timeline: '1 day' },
                        standard: { cost: 200, timeline: '2 days' },
                        documentRequirements: [
                            'Passport', 'Photo'
                        ]
                    }
                ]
            },
            {
                id: 'wps_services',
                name: 'WPS Services',
                description: 'Wage Protection System registration and management',
                icon: 'account_balance',
                categoryId: 'gov_hr',
                subServices: [
                    {
                        id: 'mohre_wps_register',
                        name: 'WPS Registration',
                        description: 'Registering a company under Wage Protection System.',
                        icon: 'how_to_reg',
                        serviceTypeId: 'wps_services',
                        premium: { cost: 300, timeline: 'Priority' },
                        standard: { cost: 200, timeline: '1 day' },
                        documentRequirements: [
                            'Trade License', 'Establishment Card'
                        ]
                    },
                    {
                        id: 'mohre_wps_submission',
                        name: 'WPS File Submission',
                        description: 'Submitting WPS file for salary payments.',
                        icon: 'upload_file',
                        serviceTypeId: 'wps_services',
                        premium: { cost: 220, timeline: 'Priority' },
                        standard: { cost: 120, timeline: 'Same day' },
                        documentRequirements: [
                            'Employee List', 'Salary Sheet'
                        ]
                    },
                    {
                        id: 'mohre_wps_fine_resolution',
                        name: 'WPS Fine Resolution',
                        description: 'Clearing WPS non-payment or delay fines.',
                        icon: 'gavel',
                        serviceTypeId: 'wps_services',
                        premium: { cost: 'Fine + 250', timeline: 'Priority' },
                        standard: { cost: 'Fine + 150', timeline: '2–5 days' },
                        documentRequirements: [
                            'Company papers'
                        ]
                    }
                ]
            },
            {
                id: 'company_services',
                name: 'Company Services',
                description: 'Quotas, updates, and establishment card services',
                icon: 'business',
                categoryId: 'gov_hr',
                subServices: [
                    {
                        id: 'mohre_quota_request',
                        name: 'Company Labour Quota Request',
                        description: 'Requesting additional visa quota.',
                        icon: 'add_box',
                        serviceTypeId: 'company_services',
                        premium: { cost: 250, timeline: 'Priority' },
                        standard: { cost: 150, timeline: '2–5 days' },
                        documentRequirements: [
                            'Trade License', 'Labour Establishment File'
                        ]
                    },
                    {
                        id: 'mohre_quota_renew',
                        name: 'Company Labour Quota Renewal',
                        description: 'Renewing existing labor quotas.',
                        icon: 'autorenew',
                        serviceTypeId: 'company_services',
                        premium: { cost: 220, timeline: 'Priority' },
                        standard: { cost: 120, timeline: '1–2 days' },
                        documentRequirements: []
                    },
                    {
                        id: 'mohre_company_update',
                        name: 'Company Information Update',
                        description: 'Updating company phone, address, PRO details.',
                        icon: 'update',
                        serviceTypeId: 'company_services',
                        premium: { cost: 220, timeline: 'Priority' },
                        standard: { cost: 120, timeline: '1 day' },
                        documentRequirements: [
                            'License', 'EID'
                        ]
                    },
                    {
                        id: 'mohre_est_card_amend',
                        name: 'Establishment Card Amendments',
                        description: 'Updating authorized signatory, phone, address.',
                        icon: 'edit_road',
                        serviceTypeId: 'company_services',
                        premium: { cost: 250, timeline: 'Priority' },
                        standard: { cost: 150, timeline: '1–3 days' },
                        documentRequirements: [
                            'License', 'Passport of owner'
                        ]
                    },
                    {
                        id: 'mohre_suspension_remove',
                        name: 'Establishment Suspension Removal',
                        description: 'Removing company suspension due to fines.',
                        icon: 'lock_open',
                        serviceTypeId: 'company_services',
                        premium: { cost: 'Fine + 300', timeline: 'Priority' },
                        standard: { cost: 'Fine + 200', timeline: '3–7 days' },
                        documentRequirements: [
                            'License', 'Labour File'
                        ]
                    }
                ]
            },
            {
                id: 'complaints',
                name: 'Labour Complaints',
                description: 'Filing and managing labor complaints',
                icon: 'report_problem',
                categoryId: 'gov_hr',
                subServices: [
                    {
                        id: 'mohre_complaint',
                        name: 'Labour Complaint Filing',
                        description: 'Filing an official complaint with MOHRE.',
                        icon: 'rate_review',
                        serviceTypeId: 'complaints',
                        premium: { cost: 200, timeline: 'Priority' },
                        standard: { cost: 100, timeline: '1–2 days' },
                        documentRequirements: [
                            'Contract', 'Passport', 'Evidence'
                        ]
                    },
                    {
                        id: 'mohre_complaint_followup',
                        name: 'Complaint Follow-up',
                        description: 'PRO follows up hearings until resolution.',
                        icon: 'manage_search',
                        serviceTypeId: 'complaints',
                        premium: { cost: 400, timeline: 'Priority' },
                        standard: { cost: 300, timeline: 'Case dependent' },
                        documentRequirements: []
                    }
                ]
            }
        ]
    },
    {
        id: 'banking',
        name: 'Banking Services',
        description: 'Business and personal banking solutions',
        icon: 'account_balance',
        color: '#4CAF50',
        serviceTypes: [
            {
                id: 'corporate_banking',
                name: 'Corporate Bank Accounts',
                description: 'Business banking accounts for companies operating in the UAE',
                icon: 'business',
                categoryId: 'banking',
                subServices: [
                    {
                        id: 'business_current_account',
                        name: 'Business Current Account',
                        description: 'Essential operating account for daily business transactions',
                        icon: 'account_balance_wallet',
                        serviceTypeId: 'corporate_banking',
                        premium: { cost: '2000-3500', timeline: '3-5 working days' },
                        standard: { cost: '1200-2000', timeline: '5-7 working days' },
                        documentRequirements: [
                            'Trade license & MOA',
                            'Passport/visa/Emirates ID',
                            'Board resolution',
                            'Tenancy contract (Ejari)',
                            'Business plan'
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: 'tax',
        name: 'Tax Services',
        description: 'Includes VAT, Corporate Tax, ESR, Customs, AEO, Tax Residency Certificates, and more.',
        icon: 'receipt_long',
        color: '#FF9800',
        serviceTypes: [
            {
                id: 'vat',
                name: 'VAT Services',
                description: 'Value Added Tax registration, filing, and compliance',
                icon: 'percent',
                categoryId: 'tax',
                subServices: [
                    {
                        id: 'tax_vat_register',
                        name: 'VAT Registration (TRN) – New Company',
                        description: 'Registering a business under UAE VAT and obtaining TRN.',
                        icon: 'app_registration',
                        serviceTypeId: 'vat',
                        premium: { cost: 300, timeline: '3–5 working days' },
                        standard: { cost: 300, timeline: '3–5 working days' },
                        documentRequirements: [
                            'Trade License', 'Passport & EID of Owner', 'MOA', 'Bank Statement', 'Lease Agreement'
                        ]
                    },
                    {
                        id: 'tax_vat_deregister',
                        name: 'VAT Deregistration',
                        description: 'Cancelling TRN for closed or inactive companies.',
                        icon: 'cancel',
                        serviceTypeId: 'vat',
                        premium: { cost: 350, timeline: '7–10 days' },
                        standard: { cost: 350, timeline: '7–10 days' },
                        documentRequirements: [
                            'Final Return', 'Audit Report', 'License'
                        ]
                    },
                    {
                        id: 'tax_vat_return_quarterly',
                        name: 'VAT Return Filing – Quarterly',
                        description: 'Preparing & filing VAT returns every 3 months.',
                        icon: 'event_note',
                        serviceTypeId: 'vat',
                        premium: { cost: 350, timeline: '1–2 days' },
                        standard: { cost: 350, timeline: '1–2 days' },
                        documentRequirements: [
                            'Sales Report', 'Purchase Report', 'Expense Summary'
                        ]
                    },
                    {
                        id: 'tax_vat_return_monthly',
                        name: 'VAT Return Filing – Monthly',
                        description: 'Monthly VAT filing for large companies.',
                        icon: 'calendar_month',
                        serviceTypeId: 'vat',
                        premium: { cost: 600, timeline: '1–2 days' },
                        standard: { cost: 600, timeline: '1–2 days' },
                        documentRequirements: []
                    },
                    {
                        id: 'tax_vat_disclosure',
                        name: 'VAT Voluntary Disclosure (Form 211)',
                        description: 'Correction of previously filed VAT returns.',
                        icon: 'edit_document',
                        serviceTypeId: 'vat',
                        premium: { cost: 500, timeline: '3–5 days' },
                        standard: { cost: 500, timeline: '3–5 days' },
                        documentRequirements: [
                            'VAT return', 'Invoices'
                        ]
                    },
                    {
                        id: 'tax_vat_reconsideration',
                        name: 'VAT Reconsideration Request',
                        description: 'Filing a reconsideration request for VAT penalties.',
                        icon: 'gavel',
                        serviceTypeId: 'vat',
                        premium: { cost: 350, timeline: '7–14 days' },
                        standard: { cost: 350, timeline: '7–14 days' },
                        documentRequirements: [
                            'Justification letter', 'Evidence'
                        ]
                    },
                    {
                        id: 'tax_vat_cleanup',
                        name: 'VAT Ledger Cleanup',
                        description: 'Clearing pending liabilities and mismatched filings.',
                        icon: 'cleaning_services',
                        serviceTypeId: 'vat',
                        premium: { cost: 400, timeline: '3–7 days' },
                        standard: { cost: 400, timeline: '3–7 days' },
                        documentRequirements: []
                    },
                    {
                        id: 'tax_vat_group',
                        name: 'VAT Group Registration',
                        description: 'Registering multiple companies under single VAT group.',
                        icon: 'group_add',
                        serviceTypeId: 'vat',
                        premium: { cost: 450, timeline: '5–7 days' },
                        standard: { cost: 450, timeline: '5–7 days' },
                        documentRequirements: [
                            'Licenses', 'MOA', 'Shareholder Proof'
                        ]
                    },
                    {
                        id: 'tax_vat_group_amend',
                        name: 'VAT Group Amendment',
                        description: 'Adding/removing entity from VAT group.',
                        icon: 'group_work',
                        serviceTypeId: 'vat',
                        premium: { cost: 250, timeline: '2–3 days' },
                        standard: { cost: 250, timeline: '2–3 days' },
                        documentRequirements: []
                    },
                    {
                        id: 'tax_vat_refund',
                        name: 'VAT Refund Request',
                        description: 'Filing for refund of excess VAT.',
                        icon: 'currency_exchange',
                        serviceTypeId: 'vat',
                        premium: { cost: 350, timeline: '7–14 days' },
                        standard: { cost: 350, timeline: '7–14 days' },
                        documentRequirements: [
                            'VAT returns', 'Bank letter'
                        ]
                    },
                    {
                        id: 'tax_vat_audit_assist',
                        name: 'VAT Audit Assistance',
                        description: 'Assisting during FTA audit.',
                        icon: 'support_agent',
                        serviceTypeId: 'vat',
                        premium: { cost: 1500, timeline: 'Case-dependent' },
                        standard: { cost: 1500, timeline: 'Case-dependent' },
                        documentRequirements: []
                    },
                    {
                        id: 'tax_vat_amend',
                        name: 'VAT Registration Amendment',
                        description: 'Updating tax records—bank, address, activity.',
                        icon: 'edit',
                        serviceTypeId: 'vat',
                        premium: { cost: 200, timeline: '1–2 days' },
                        standard: { cost: 200, timeline: '1–2 days' },
                        documentRequirements: []
                    },
                    {
                        id: 'tax_vat_compliance',
                        name: 'VAT Compliance Certificate',
                        description: 'Issuance of compliance report for banks/partners.',
                        icon: 'verified',
                        serviceTypeId: 'vat',
                        premium: { cost: 250, timeline: '1–2 days' },
                        standard: { cost: 250, timeline: '1–2 days' },
                        documentRequirements: []
                    },
                    {
                        id: 'tax_vat_training',
                        name: 'VAT Training for Business',
                        description: 'Training staff on VAT record keeping.',
                        icon: 'school',
                        serviceTypeId: 'vat',
                        premium: { cost: 450, timeline: '2 hours' },
                        standard: { cost: 450, timeline: '2 hours' },
                        documentRequirements: []
                    },
                    {
                        id: 'tax_vat_bookkeeping',
                        name: 'VAT Bookkeeping (Monthly)',
                        description: 'Full VAT bookkeeping and record management.',
                        icon: 'menu_book',
                        serviceTypeId: 'vat',
                        premium: { cost: 350, timeline: 'Monthly' },
                        standard: { cost: 350, timeline: 'Monthly' },
                        documentRequirements: []
                    }
                ]
            },
            {
                id: 'corporate_tax',
                name: 'Corporate Tax Services',
                description: 'Corporate Tax registration, filing, and compliance',
                icon: 'domain',
                categoryId: 'tax',
                subServices: [
                    {
                        id: 'tax_ct_register',
                        name: 'Corporate Tax Registration',
                        description: 'Registering company for UAE CT + obtaining Tax Number.',
                        icon: 'how_to_reg',
                        serviceTypeId: 'corporate_tax',
                        premium: { cost: 300, timeline: '3–5 days' },
                        standard: { cost: 300, timeline: '3–5 days' },
                        documentRequirements: [
                            'License', 'MOA', 'Passport'
                        ]
                    },
                    {
                        id: 'tax_ct_return',
                        name: 'Corporate Tax Return Filing',
                        description: 'Annual CT filing.',
                        icon: 'file_present',
                        serviceTypeId: 'corporate_tax',
                        premium: { cost: 550, timeline: '3–5 days' },
                        standard: { cost: 550, timeline: '3–5 days' },
                        documentRequirements: [
                            'P&L', 'Balance Sheet'
                        ]
                    },
                    {
                        id: 'tax_ct_monthly',
                        name: 'Corporate Tax Accounting (Monthly)',
                        description: 'Monthly CT accounting & reporting.',
                        icon: 'account_balance',
                        serviceTypeId: 'corporate_tax',
                        premium: { cost: 450, timeline: 'Monthly' },
                        standard: { cost: 450, timeline: 'Monthly' },
                        documentRequirements: []
                    },
                    {
                        id: 'tax_ct_reconsideration',
                        name: 'Corporate Tax Reconsideration',
                        description: 'Request to remove CT penalties.',
                        icon: 'gavel',
                        serviceTypeId: 'corporate_tax',
                        premium: { cost: 350, timeline: '7–14 days' },
                        standard: { cost: 350, timeline: '7–14 days' },
                        documentRequirements: []
                    },
                    {
                        id: 'tax_ct_disclosure',
                        name: 'Corporate Tax Voluntary Disclosure',
                        description: 'Correcting previous CT filings.',
                        icon: 'edit_document',
                        serviceTypeId: 'corporate_tax',
                        premium: { cost: 500, timeline: '5–7 days' },
                        standard: { cost: 500, timeline: '5–7 days' },
                        documentRequirements: []
                    }
                ]
            }
        ]
    }
];
