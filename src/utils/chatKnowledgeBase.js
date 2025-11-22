// Enhanced AI Chatbot Knowledge Base and Response System
import { blogPosts } from '../data/blogData';
import { freezonesData } from '../data/freezonesData';
import { emiratesData, sectorOpportunities, goldenVisaProgram } from '../data/investmentData';
import { servicesData } from '../data/services';

// Conversation context management
export class ChatContext {
    constructor() {
        this.history = [];
        this.currentTopic = null;
        this.userPreferences = {};
    }

    addMessage(role, content, metadata = {}) {
        this.history.push({
            role,
            content,
            timestamp: new Date(),
            metadata
        });

        // Update current topic based on keywords
        if (role === 'user') {
            this.updateTopic(content);
        }
    }

    updateTopic(message) {
        const msg = message.toLowerCase();
        if (msg.includes('freezone') || msg.includes('free zone')) this.currentTopic = 'freezones';
        else if (msg.includes('tax') || msg.includes('vat')) this.currentTopic = 'tax';
        else if (msg.includes('visa') || msg.includes('residency')) this.currentTopic = 'visa';
        else if (msg.includes('invest') || msg.includes('golden visa')) this.currentTopic = 'investment';
        else if (msg.includes('bank') || msg.includes('account')) this.currentTopic = 'banking';
        else if (msg.includes('license') || msg.includes('setup')) this.currentTopic = 'setup';
    }

    getRecentMessages(count = 5) {
        return this.history.slice(-count);
    }

    clear() {
        this.history = [];
        this.currentTopic = null;
    }
}

// Enhanced response generator using actual data
export function generateEnhancedResponse(query, context) {
    const q = query.toLowerCase();

    // Multi-keyword detection
    const keywords = {
        freezone: /freezone|free zone|fz|dmcc|difc|jafza|saif|rakez/i,
        tax: /tax|vat|corporate tax|taxation|9%/i,
        visa: /visa|residence|residency|golden visa|freelance visa/i,
        banking: /bank|account|corporate account|business account/i,
        investment: /invest|golden visa|property|real estate|opportunity/i,
        cost: /cost|price|fee|expense|how much|charges/i,
        ecommerce: /e-commerce|ecommerce|online business|online store/i,
        license: /license|trade license|commercial license|permit/i,
        setup: /setup|start|open|form|establish|create business/i,
        emirate: /dubai|abu dhabi|sharjah|ajman|fujairah|ras al khaimah|umm al quwain/i
    };

    // Track which keywords match
    const matches = Object.entries(keywords)
        .filter(([_, regex]) => regex.test(q))
        .map(([key, _]) => key);

    // Generate response based on matches
    if (matches.includes('freezone')) {
        return getFreezoneResponse(q, context);
    }

    if (matches.includes('tax')) {
        return getTaxResponse(q, context);
    }

    if (matches.includes('visa')) {
        return getVisaResponse(q, context);
    }

    if (matches.includes('banking')) {
        return getBankingResponse(q, context);
    }

    if (matches.includes('investment')) {
        return getInvestmentResponse(q, context);
    }

    if (matches.includes('cost')) {
        return getCostResponse(q, context);
    }

    if (matches.includes('ecommerce')) {
        return getEcommerceResponse(q, context);
    }

    if (matches.includes('license')) {
        return getLicenseResponse(q, context);
    }

    if (matches.includes('setup')) {
        return getSetupResponse(q, context);
    }

    if (matches.includes('emirate')) {
        return getEmirateResponse(q, context);
    }

    // Default general response
    return getGeneralResponse(q, context);
}

// Specific response functions
function getFreezoneResponse(query, context) {
    const q = query.toLowerCase();

    // E-commerce specific
    if (q.includes('ecommerce') || q.includes('e-commerce') || q.includes('online')) {
        const ecommerceFZ = freezonesData.filter(fz =>
            fz.popularActivities.some(act => act.toLowerCase().includes('e-commerce'))
        );
        return {
            text: `For e-commerce businesses, I recommend these top freezones:\n\n` +
                ecommerceFZ.slice(0, 3).map((fz, i) =>
                    `${i + 1}. **${fz.name}** - ${fz.specialization}\n   💰 Cost: AED ${fz.minCost.toLocaleString()} - ${fz.maxCost.toLocaleString()}\n   ⏱️ Setup: ${fz.setupTime}`
                ).join('\n\n'),
            related: ['cost', 'setup'],
            suggestions: [
                "What documents are needed for freezone setup?",
                "Compare DMCC vs IFZA costs",
                "What visa quota do I get?"
            ]
        };
    }

    // Technology specific
    if (q.includes('tech') || q.includes('it') || q.includes('software')) {
        const techFZ = freezonesData.filter(fz =>
            fz.specialization.toLowerCase().includes('tech') ||
            fz.name.toLowerCase().includes('silicon') ||
            fz.name.toLowerCase().includes('dtec')
        );
        return {
            text: `Best freezones for technology companies:\n\n` +
                techFZ.slice(0, 3).map((fz, i) =>
                    `${i + 1}. **${fz.name}** (${fz.location})\n   ${fz.description}\n   ⭐ Rating: ${fz.rating}/5`
                ).join('\n\n'),
            suggestions: [
                "What are the benefits of Dubai Silicon Oasis?",
                "Tech startup costs in DMCC",
                "Can I get investor visa in tech freezone?"
            ]
        };
    }

    // Cost comparison
    if (q.includes('cheap') || q.includes('affordable') || q.includes('low cost')) {
        const affordableFZ = [...freezonesData]
            .sort((a, b) => a.minCost - b.minCost)
            .slice(0, 5);
        return {
            text: `Most affordable freezones in UAE:\n\n` +
                affordableFZ.map((fz, i) =>
                    `${i + 1}. **${fz.name}** - ${fz.emirate}\n   💰 Starting from: AED ${fz.minCost.toLocaleString()}\n   ⚡ Setup time: ${fz.setupTime}`
                ).join('\n\n'),
            suggestions: [
                "What's included in the freezone package?",
                "Renewal costs comparison",
                "Freelance visa options"
            ]
        };
    }

    // General freezone info
    return {
        text: `UAE has 52 freezones, each specialized for different business types:\n\n` +
            `🏙️ **Dubai**: 22 freezones (DMCC, DIFC, JAFZA, etc.)\n` +
            `🏛️ **Abu Dhabi**: 12 freezones (ADGM, Masdar City, etc.)\n` +
            `📚 **Sharjah**: 8 freezones (SAIF Zone, SHAMS, etc.)\n` +
            `🏖️ **Others**: 10 freezones across RAK, Ajman, Fujairah, UAQ\n\n` +
            `Tell me about your business type and I can recommend the best fit!`,
        suggestions: [
            "Best freezone for e-commerce",
            "Cheapest freezone options",
            "Tech startup freezones",
            "Manufacturing freezones"
        ]
    };
}

function getTaxResponse(query, context) {
    return {
        text: `**UAE Corporate Tax Overview:**\n\n` +
            `📊 **Tax Rate**: 9% on net profits above AED 375,000\n` +
            `💚 **Tax-Free Threshold**: First AED 375,000 is tax-free\n` +
            `🏢 **Freezone Benefits**: Eligible freezones can qualify for 0% tax\n` +
            `📅 **Filing**: Annual tax return required\n` +
            `✅ **VAT**: 5% on goods and services (registration required for turnover > AED 375,000)\n\n` +
            `Small businesses are tax-efficient in UAE! Want to know about specific deductions or freezone tax exemptions?`,
        suggestions: [
            "Which freezones offer 0% corporate tax?",
            "VAT registration process",
            "Tax deductions available",
            "Transfer pricing rules"
        ]
    };
}

function getVisaResponse(query, context) {
    const q = query.toLowerCase();

    if (q.includes('golden')) {
        return {
            text: `**Golden Visa Program:**\n\n` +
                `🌟 **10-Year Visa** - Renewable residency\n\n` +
                `**Eligibility Routes:**\n` +
                `1. 🏠 **Real Estate**: AED 2M+ property purchase\n` +
                `2. 💼 **Investors**: AED 2M+ investment in company/fund\n` +
                `3. 🚀 **Entrepreneurs**: AED 500K+ capital with incubator approval\n` +
                `4. 🎓 **Specialists**: Doctors, scientists, artists with achievements\n` +
                `5.📚 **Students**: Outstanding academic performance\n\n` +
                `**Benefits**: Family sponsorship, work freely, extended travel allowed`,
            suggestions: [
                "Golden visa through real estate",
                "Entrepreneur golden visa requirements",
                "Can I include my family?",
                "Golden visa application process"
            ]
        };
    }

    if (q.includes('freelance')) {
        return {
            text: `**Freelance Visa Options:**\n\n` +
                `Most affordable: **SHAMS** (Sharjah) - from AED 5,000\n` +
                `Popular: **RAKEZ** - from AED 8,000\n` +
                `Dubai options: **IFZA**, **DMCC Freezone Company**\n\n` +
                `✅ Includes: License, visa, Emirates ID\n` +
                `⏱️ Process: 1-2 days\n` +
                `👨‍💼 Work independently across UAE`,
            suggestions: [
                "SHAMS freelance visa details",
                "Can I sponsor my family on freelance visa?",
                "Freelance visa renewal cost"
            ]
        };
    }

    return {
        text: `**UAE Visa Types:**\n\n` +
            `1. **Employment Visa** - Sponsored by company\n` +
            `2. **Investor Visa** - Through business ownership\n` +
            `3. **Freelance Visa** - For independent professionals\n` +
            `4. **Golden Visa** - 5 or 10  years renewable\n` +
            `5. **Retirement Visa** - For retirees 55+\n\n` +
            `Which type are you interested in?`,
        suggestions: [
            "Golden visa requirements",
            "Freelance visa cost",
            "How many family members can I sponsor?",
            "Investor visa process"
        ]
    };
}

function getBankingResponse(query, context) {
    return {
        text: `**Opening a Corporate Bank Account:**\n\n` +
            `📋 **Required Documents:**\n` +
            `- Valid trade license\n` +
            `- Passport copies of shareholders/directors\n` +
            `- Emirates ID\n` +
            `- Business plan and financial projections\n` +
            `- Proof of address (utility bill)\n` +
            `- Board resolution (for companies)\n\n` +
            `🏦 **Popular Banks:**\n` +
            `- Emirates NBD, Dubai Islamic Bank, ADCB, Mashreq, RAK Bank\n\n` +
            `⏱️ **Timeline**: 1-4 weeks\n` +
            `💰 **Minimum Balance**: Varies (AED 25,000 - 100,000)\n\n` +
            `We can assist with faster bank account opening!`,
        suggestions: [
            "Which bank is best for startups?",
            "Can I open account before getting license?",
            "Digital banking options for businesses"
        ]
    };
}

function getInvestmentResponse(query, context) {
    return {
        text: `**Investment Opportunities in UAE:**\n\n` +
            `🌟 **Top Sectors:**\n` +
            `1. Technology & Fintech - 12% annual growth\n` +
            `2. Real Estate - 5-8% annual yields\n` +
            `3. Tourism & Hospitality - 10% growth\n` +
            `4. Healthcare - 11% expansion\n` +
            `5. E-commerce - 25% annual growth\n\n` +
            `**Key Benefits:**\n` +
            `✅ 100% foreign ownership\n` +
            `✅ 0% personal income tax\n` +
            `✅ Strategic location\n` +
            `✅ Golden Visa eligibility\n\n` +
            `Which sector interests you?`,
        suggestions: [
            "Real estate investment guide",
            "Tech startup investment costs",
            "Tourism business opportunities",
            "Golden visa through investment"
        ]
    };
}

function getCostResponse(query, context) {
    return {
        text: `**Business Setup Costs Overview:**\n\n` +
            `🏢 **Freezone Startup** (General Trading):\n` +
            `- License: AED 15,000/year\n` +
            `- Flexi-desk: AED 12,000/year\n` +
            `- 2 Visas: AED 6,000 each\n` +
            `- Setup fees: AED 2,000\n` +
            `**Total Year 1**: ~AED 35,000\n\n` +
            `🏙️ **Mainland Setup**:\n` +
            `- License: AED 20,000/year\n` +
            `- Office: AED 40,000/year\n` +
            `- Service agent: AED 3,000/year\n` +
            `**Total Year 1**: ~AED 76,500\n\n` +
            `💡 Most affordable: **Ajman FZ** from AED 6,500\n` +
            `🌟 Premium: **DIFC** from AED 35,000+`,
        suggestions: [
            "Compare freezone costs",
            "Hidden fees to watch for",
            "Cheapest freezone options",
            "E-commerce setup cost"
        ]
    };
}

function getEcommerceResponse(query, context) {
    return {
        text: `**Best Freezones for E-Commerce:**\n\n` +
            `1. **IFZA** - From AED 7,500\n` +
            `   ✅ Very affordable, fast setup (1 day)\n\n` +
            `2. **Dubai CommerCity** - From AED 11,000\n` +
            `   ✅ E-commerce specialized, fulfillment services\n\n` +
            `3. **RAKEZ** - From AED 8,000\n` +
            `   ✅ Low cost, flexible packages\n\n` +
            `4. **DMCC** - From AED 16,000\n` +
            `   ✅ Premium location, strong reputation\n\n` +
            `**What You Need:**\n` +
            `- E-commerce license\n` +
            `- Payment gateway\n` +
            `- Website/platform\n` +
            `- Inventory storage (optional)`,
        suggestions: [
            "Can I sell on Amazon with freezone license?",
            "Payment gateway providers in UAE",
            "Dropshipping business setup"
        ]
    };
}

function getLicenseResponse(query, context) {
    return {
        text: `**UAE Business License Types:**\n\n` +
            `🏢 **Commercial License** - Trading, import/export\n` +
            `👔 **Professional License** - Consultancy, services\n` +
            `🏭 **Industrial License** - Manufacturing, production\n` +
            `🏥 **Tourism License** - Hotels, travel agencies\n` +
            `📺 **Freelance License** - Independent professionals\n\n` +
            `**Processing Time:**\n` +
            `- Freezone: 1-5 days\n` +
            `- Mainland: 3-10 days\n\n` +
            `**Validity**: 1 year (renewable)\n\n` +
            `What type of business are you planning?`,
        suggestions: [
            "Commercial vs professional license",
            "License renewal process",
            "Can I have multiple licenses?",
            "License amendment cost"
        ]
    };
}

function getSetupResponse(query, context) {
    return {
        text: `**Business Setup Process:**\n\n` +
            `**Step 1: Choose Business Activity** 📋\n` +
            `**Step 2: Select Freezone or Mainland** 🏢\n` +
            `**Step 3: Reserve Trade Name** ✍️\n` +
            `**Step 4: Apply for License** 📄\n` +
            `**Step 5: Get Office Space** 🏠\n` +
            `**Step 6: Open Bank Account** 🏦\n` +
            `**Step 7: Apply for Visas** ✈️\n\n` +
            `⏱️ **Total Timeline**: 1-3 weeks\n` +
            `💰 **Starting From**: AED 6,500 (Ajman FZ)\n\n` +
            `We handle the entire process for you!`,
        suggestions: [
            "Freezone vs mainland comparison",
            "Setup process documents needed",
            "Can I do it myself or need PRO?",
            "Setup timeline for specific freezone"
        ]
    };
}

function getEmirateResponse(query, context) {
    const q = query.toLowerCase();

    // Detect emirate mentioned
    let emirate = null;
    if (q.includes('dubai')) emirate = emiratesData.find(e => e.id === 'dubai');
    else if (q.includes('abu dhabi')) emirate = emiratesData.find(e => e.id === 'abu-dhabi');
    else if (q.includes('sharjah')) emirate = emiratesData.find(e => e.id === 'sharjah');
    else if (q.includes('ajman')) emirate = emiratesData.find(e => e.id === 'ajman');
    else if (q.includes('ras al khaimah') || q.includes('rak')) emirate = emiratesData.find(e => e.id === 'ras-khaimah');
    else if (q.includes('fujairah')) emirate = emiratesData.find(e => e.id === 'fujairah');
    else if (q.includes('umm al quwain') || q.includes('uaq')) emirate = emiratesData.find(e => e.id === 'uaq');

    if (emirate) {
        return {
            text: `**${emirate.name} ${emirate.icon}**\n\n` +
                `${emirate.description}\n\n` +
                `👥 **Population**: ${emirate.population}\n` +
                `💰 **GDP**: ${emirate.gdp}\n` +
                `📈 **Growth**: ${emirate.gdpGrowth}\n\n` +
                `**Major Industries:**\n` +
                emirate.majorIndustries.map(ind => `• ${ind}`).join('\n') + '\n\n' +
                `**Investment Highlights:**\n` +
                emirate.investmentHighlights.slice(0, 3).map(h => `✅ ${h}`).join('\n'),
            suggestions: [
                `Best freezones in ${emirate.name}`,
                `Cost of living in ${emirate.name}`,
                `Business opportunities in ${emirate.name}`
            ]
        };
    }

    return {
        text: `**UAE Emirates Overview:**\n\n` +
            emiratesData.map(e =>
                `${e.icon} **${e.name}** - ${e.description.substring(0, 50)}...`
            ).join('\n\n'),
        suggestions: [
            "Compare Dubai vs Abu Dhabi",
            "Cheapest emirate for business",
            "Which emirate for tech business?"
        ]
    };
}

function getGeneralResponse(query, context) {
    // Try to find relevant blog post
    const relevantBlog = blogPosts.find(blog => {
        const title = blog.title.toLowerCase();
        const excerpt = blog.excerpt.toLowerCase();
        const q = query.toLowerCase();
        return title.includes(q.split(' ')[0]) || excerpt.includes(q.split(' ')[0]);
    });

    if (relevantBlog) {
        return {
            text: `I found a helpful article: **${relevantBlog.title}**\n\n` +
                `${relevantBlog.excerpt}\n\n` +
                `📚 Category: ${relevantBlog.category}\n` +
                `⏱️ Read time: ${relevantBlog.readTime}\n\n` +
                `Would you like more specific information about this topic?`,
            suggestions: [
                "More about business setup",
                "Tax and compliance guides",
                "Freezone comparisons"
            ]
        };
    }

    return {
        text: `I can help you with:\n\n` +
            `🏢 **Freezone Selection** - Find the perfect freezone\n` +
            `💰 **Cost Estimates** - Business setup costs\n` +
            `📋 **Visa Information** - Golden visa, freelance, investor\n` +
            `🏦 **Banking** - Corporate account opening\n` +
            `📊 **Tax Guidance** - Corporate tax, VAT\n` +
            `💼 **Investment** - Opportunities and sectors\n\n` +
            `What would you like to know more about?`,
        suggestions: [
            "Find best freezone for my business",
            "Calculate setup costs",
            "Golden visa requirements",
            "Corporate tax explained"
        ]
    };
}

// Dynamic suggestions based on conversation context
export function getDynamicSuggestions(context) {
    if (!context.currentTopic) {
        return [
            "🏢 What are the best freezones for tech startups?",
            "💰 How much does it cost to start a business in Dubai?",
            "✈️ Tell me about Golden Visa requirements",
            "📊 Explain UAE corporate tax"
        ];
    }

    const suggestionMap = {
        freezones: [
            "Compare DMCC vs IFZA costs",
            "What documents do I need?",
            "Show me cheapest freezone options",
            "What visa quota do I get?"
        ],
        tax: [
            "Which freezones offer 0% tax?",
            "VAT registration process",
            "Tax deductions available",
            "Corporate tax filing deadlines"
        ],
        visa: [
            "Golden visa through real estate",
            "Freelance visa cost and process",
            "Can I sponsor family members?",
            "Investor visa requirements"
        ],
        banking: [
            "Which bank is best for startups?",
            "Required documents for account",
            "Can I open account remotely?",
            "Minimum balance requirements"
        ],
        investment: [
            "Real estate investment opportunities",
            "Tech sector investment guide",
            "Golden visa investment routes",
            "ROI expectations by sector"
        ],
        setup: [
            "Freezone vs mainland comparison",
            "Step by step setup process",
            "Timeline for business setup",
            "Do I need a local sponsor?"
        ]
    };

    return suggestionMap[context.currentTopic] || suggestionMap.freezones;
}

// Export chat utilities
export function exportConversation(messages) {
    const text = messages.map(msg =>
        `${msg.type === 'bot' ? 'AI' : 'You'} (${new Date(msg.timestamp).toLocaleTimeString()}):\n${msg.text}\n`
    ).join('\n');

    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `wazeet-chat-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
}

export function copyMessage(text) {
    navigator.clipboard.writeText(text);
}

export function shareConversation(messages) {
    const text = messages.map(msg => `${msg.type === 'bot' ? 'AI' : 'Me'}: ${msg.text}`).join('\n\n');

    if (navigator.share) {
        navigator.share({
            title: 'Wazeet AI Conversation',
            text: text
        });
    } else {
        copyMessage(text);
        alert('Conversation copied to clipboard!');
    }
}
