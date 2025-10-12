describe('Landing Page', () => {
  it('displays hero with correct background image and text, charts, card sections, and progress bar', () => {
    cy.visit('/');
    // Verify hero text
    cy.contains('FACILITIES MANAGEMENT SYSTEM').should('be.visible');
    cy.contains('Stewardship in facility management ensures sustainable spaces, aligning resources with purpose.').should('be.visible');
    cy.contains('Sifiso Cyprian Shezi, Facilities Assistant Level 1').should('be.visible');
    // Verify hero background image
    cy.get('section').first().should('have.css', 'background-image')
      .and('match', /url\("https:\/\/images\.unsplash\.com\/photo-1497366754035-f200968a6e72/);
    // Verify other elements
    cy.contains('Completion Rates by Service').should('be.visible');
    cy.contains('Performance Metrics').should('be.visible');
    cy.contains('Strategic Facilities Intelligence').should('be.visible');
    cy.contains('Facilities Management Dashboards').should('be.visible');
    cy.contains('Service Providers').should('be.visible');
    cy.get('.bg-white\\/10.backdrop-blur-md').should('have.length', 9);
    cy.get('.shadow-lg.border-2').should('have.length', 9);
    cy.get('.border-t-4').should('have.length', 5);
    cy.get('[data-testid="bprogress"]').should('be.visible');
  });

  it('navigates to Global FM Intelligence dashboard and sub-pages', () => {
    cy.visit('/');
    cy.get('a[href="/strategic-intelligence/global-fm-intelligence"]').click();
    cy.contains('Global FM Intelligence Dashboard').should('be.visible');
    cy.get('a[href="/strategic-intelligence/global-fm-overview"]').click();
    cy.contains('Global FM Intelligence: Overview').should('be.visible');
    cy.get('a[href="/strategic-intelligence/global-fm-intelligence"]').click();
    cy.get('a[href="/strategic-intelligence/global-fm-best-practices"]').click();
    cy.contains('Global FM Intelligence: Best Practices').should('be.visible');
    cy.get('a[href="/strategic-intelligence/global-fm-intelligence"]').click();
    cy.get('a[href="/strategic-intelligence/global-fm-risk-intelligence"]').click();
    cy.contains('Global FM Intelligence: Risk Intelligence').should('be.visible');
    cy.get('a[href="/strategic-intelligence/global-fm-intelligence"]').click();
    cy.get('a[href="/strategic-intelligence/global-fm-innovation-tracker"]').click();
    cy.contains('Global FM Intelligence: Innovation Tracker').should('be.visible');
    cy.get('a[href="/strategic-intelligence/global-fm-intelligence"]').click();
    cy.get('a[href="/"]').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('navigates to Sustainability Ledger dashboard', () => {
    cy.visit('/');
    cy.get('a[href="/strategic-intelligence/sustainability-ledger"]').click();
    cy.contains('Sustainability Ledger').should('be.visible');
    cy.contains('Environmental Metrics Dashboard').should('be.visible');
    cy.contains('Sustainability Initiatives').should('be.visible');
    cy.contains('Environmental Trends').should('be.visible');
    cy.get('.bg-white.shadow-lg').should('have.length.at.least', 8);
    cy.get('.border-l-4').should('have.length', 6);
    cy.get('a[href="/"]').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('navigates to KPI Dashboard and verifies metrics', () => {
    cy.visit('/');
    cy.get('a[href="/strategic-intelligence/kpi-dashboard"]').click();
    cy.contains('KPI & Legacy Dashboard').should('be.visible');
    cy.contains('Operational Efficiency').should('be.visible');
    cy.contains('94.7%').should('be.visible');
    cy.contains('+5.2%').should('be.visible');
    cy.contains('Target: 95%').should('be.visible');
    cy.contains('Cost Management').should('be.visible');
    cy.contains('R 2 400 000').should('be.visible');
    cy.contains('12% savings').should('be.visible');
    cy.contains('Target: R 2 800 000').should('be.visible');
    cy.contains('Savings: R 320 000').should('be.visible');
    cy.contains('Asset Reliability').should('be.visible');
    cy.contains('96.2%').should('be.visible');
    cy.contains('+2.1% uptime').should('be.visible');
    cy.contains('Target: 98%').should('be.visible');
    cy.contains('Team Performance').should('be.visible');
    cy.contains('87%').should('be.visible');
    cy.contains('+8% improvement').should('be.visible');
    cy.contains('Target: 90%').should('be.visible');
    cy.contains('Sustainability Index').should('be.visible');
    cy.contains('78/100').should('be.visible');
    cy.contains('+15 points YoY').should('be.visible');
    cy.contains('Target: 85/100').should('be.visible');
    cy.contains('Customer Satisfaction').should('be.visible');
    cy.contains('92% (4.6/5)').should('be.visible');
    cy.contains('+6% satisfaction').should('be.visible');
    cy.contains('Target: 96%').should('be.visible');
    cy.get('.bg-white.shadow-lg').should('have.length', 6);
    cy.get('.border-l-4').should('have.length', 6);
    cy.get('a[href="/"]').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('navigates to Procurement Intelligence dashboard and verifies metrics', () => {
    cy.visit('/');
    cy.get('a[href="/strategic-intelligence/procurement-intelligence"]').click();
    cy.contains('Procurement Intelligence').should('be.visible');
    cy.contains('Cost Savings Dashboard').should('be.visible');
    cy.contains('R 1 200 000').should('be.visible');
    cy.contains('+18% vs last year').should('be.visible');
    cy.contains('15.3%').should('be.visible');
    cy.contains('+3.2% improvement').should('be.visible');
    cy.contains('47').should('be.visible');
    cy.contains('12 renewed').should('be.visible');
    cy.contains('5.2 days').should('be.visible');
    cy.contains('-2.1 days faster').should('be.visible');
    cy.contains('Supplier Performance Analytics').should('be.visible');
    cy.contains('TechSupply Solutions').should('be.visible');
    cy.contains('4.8').should('be.visible');
    cy.contains('On-time Delivery: 98%').should('be.visible');
    cy.contains('Contract Value: R 456 000').should('be.visible');
    cy.contains('Cost Savings: 12%').should('be.visible');
    cy.contains('Quality Score: 94%').should('be.visible');
    cy.contains('MaintainPro Services').should('be.visible');
    cy.contains('4.2').should('be.visible');
    cy.contains('On-time Delivery: 92%').should('be.visible');
    cy.contains('Contract Value: R 287 000').should('be.visible');
    cy.contains('Cost Savings: 8%').should('be.visible');
    cy.contains('Quality Score: 89%').should('be.visible');
    cy.contains('Procurement Analytics').should('be.visible');
    cy.contains('Monthly Savings Trend').should('be.visible');
    cy.contains('Spending by Category').should('be.visible');
    cy.contains('Optimization Recommendations').should('be.visible');
    cy.contains('Consolidate Office Supply Vendors').should('be.visible');
    cy.contains('Potential Savings: R 45 000/year').should('be.visible');
    cy.contains('Negotiate Long-term Contracts').should('be.visible');
    cy.contains('Potential Savings: R 78 000/year').should('be.visible');
    cy.contains('Optimize Delivery Schedules').should('be.visible');
    cy.contains('Potential Savings: R 23 000/year').should('be.visible');
    cy.contains('Implement Competitive Bidding').should('be.visible');
    cy.contains('Potential Savings: R 156 000/year').should('be.visible');
    cy.get('.bg-white.shadow-lg').should('have.length.at.least', 10);
    cy.get('.border-l-4').should('have.length', 10);
    cy.get('.cursor-pointer').click({ multiple: true, force: true });
    cy.get('a[href="/"]').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('navigates to Stewardship Charter dashboard and verifies content', () => {
    cy.visit('/');
    cy.get('a[href="/strategic-intelligence/stewardship-charter"]').click();
    cy.contains('Stewardship Charter').should('be.visible');
    cy.contains('Accountability & Legacy Leadership Framework').should('be.visible');
    cy.contains('Stewardship in facility management ensures sustainable spaces').should('be.visible');
    cy.contains('Sifiso Shezi, Facilities Assistant Level 1').should('be.visible');
    cy.contains('Core Stewardship Principles').should('be.visible');
    cy.contains('1. Responsibility & Ownership').should('be.visible');
    cy.contains('Personal accountability for decisions').should('be.visible');
    cy.contains('2. Sustainability Focus').should('be.visible');
    cy.contains('Environmental impact assessment').should('be.visible');
    cy.contains('3. Stakeholder Engagement').should('be.visible');
    cy.contains('Regular stakeholder meetings').should('be.visible');
    cy.contains('4. Innovation & Excellence').should('be.visible');
    cy.contains('Technology adoption').should('be.visible');
    cy.contains('5. Knowledge Sharing').should('be.visible');
    cy.contains('Documentation systems').should('be.visible');
    cy.contains('6. Ethical Leadership').should('be.visible');
    cy.contains('Ethical decision framework').should('be.visible');
    cy.contains('Accountability Framework').should('be.visible');
    cy.contains('Performance Tracking').should('be.visible');
    cy.contains('Goal Setting').should('be.visible');
    cy.contains('Regular Reporting').should('be.visible');
    cy.contains('Continuous Improvement').should('be.visible');
    cy.contains('Peer Review').should('be.visible');
    cy.contains('Recognition System').should('be.visible');
    cy.contains('Legacy Impact Metrics').should('be.visible');
    cy.contains('94%').should('be.visible');
    cy.contains('+12% from last quarter').should('be.visible');
    cy.contains('87').should('be.visible');
    cy.contains('+23 new this month').should('be.visible');
    cy.contains('156').should('be.visible');
    cy.contains('Growing repository').should('be.visible');
    cy.contains('92%').should('be.visible');
    cy.contains('+8% improvement').should('be.visible');
    cy.contains('43').should('be.visible');
    cy.contains('+15 this quarter').should('be.visible');
    cy.get('.bg-white.shadow-lg').should('have.length', 17);
    cy.get('.border-l-4').should('have.length', 17);
    cy.get('a[href="/"]').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('navigates to Training Module dashboard and verifies content', () => {
    cy.visit('/');
    cy.get('a[href="/strategic-intelligence/training-module"]').click();
    cy.contains('Training Module').should('be.visible');
    cy.contains('Generational Programs for FM Roles').should('be.visible');
    cy.contains('Training Programs').should('be.visible');
    cy.contains('Foundation Level').should('be.visible');
    cy.contains('FM Fundamentals').should('be.visible');
    cy.contains('Safety protocols and compliance').should('be.visible');
    cy.contains('40 Hours').should('be.visible');
    cy.contains('8 Modules').should('be.visible');
    cy.contains('95% Pass Rate').should('be.visible');
    cy.contains('Intermediate Level').should('be.visible');
    cy.contains('Technical Specialization').should('be.visible');
    cy.contains('HVAC system management').should('be.visible');
    cy.contains('80 Hours').should('be.visible');
    cy.contains('12 Modules').should('be.visible');
    cy.contains('87% Pass Rate').should('be.visible');
    cy.contains('Advanced Level').should('be.visible');
    cy.contains('Leadership & Management').should('be.visible');
    cy.contains('Team leadership skills').should('be.visible');
    cy.contains('120 Hours').should('be.visible');
    cy.contains('15 Modules').should('be.visible');
    cy.contains('92% Pass Rate').should('be.visible');
    cy.contains('Expert Level').should('be.visible');
    cy.contains('Strategic FM Excellence').should('be.visible');
    cy.contains('Strategic facility planning').should('be.visible');
    cy.contains('160 Hours').should('be.visible');
    cy.contains('20 Modules').should('be.visible');
    cy.contains('96% Pass Rate').should('be.visible');
    cy.contains('Career Development Pathways').should('be.visible');
    cy.contains('1. Facilities Assistant').should('be.visible');
    cy.contains('Entry Level • 0-2 Years Experience').should('be.visible');
    cy.contains('2. Facilities Technician').should('be.visible');
    cy.contains('Intermediate Level • 2-5 Years Experience').should('be.visible');
    cy.contains('3. Facilities Supervisor').should('be.visible');
    cy.contains('Leadership Level • 5-8 Years Experience').should('be.visible');
    cy.contains('4. Facilities Manager').should('be.visible');
    cy.contains('Management Level • 8-12 Years Experience').should('be.visible');
    cy.contains('5. Senior Facilities Director').should('be.visible');
    cy.contains('Executive Level • 12+ Years Experience').should('be.visible');
    cy.contains('Core Skills Development').should('be.visible');
    cy.contains('Technical Skills').should('be.visible');
    cy.contains('HVAC Systems').should('be.visible');
    cy.contains('Management Skills').should('be.visible');
    cy.contains('Team Leadership').should('be.visible');
    cy.contains('Soft Skills').should('be.visible');
    cy.contains('Communication').should('be.visible');
    cy.get('.bg-white.shadow-lg').should('have.length', 12);
    cy.get('.border-l-4').should('have.length', 12);
    cy.get('a[href="/"]').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('navigates to Strategic Management dashboard and verifies content', () => {
    cy.visit('/');
    cy.get('a[href="/strategic-intelligence/strategic-management"]').click();
    cy.contains('Strategic Management Dashboard').should('be.visible');
    cy.contains('Align Operations with Organizational Goals').should('be.visible');
    cy.contains('FM Strategic Goals Tracker').should('be.visible');
    cy.contains('92%').should('be.visible');
    cy.contains('+5% alignment').should('be.visible');
    cy.contains('Capital Project Forecasting').should('be.visible');
    cy.contains('R 500 000').should('be.visible');
    cy.contains('3 projects planned').should('be.visible');
    cy.contains('Sustainability Index').should('be.visible');
    cy.contains('85/100').should('be.visible');
    cy.contains('+10 points').should('be.visible');
    cy.contains('Budget Utilization & Forecast').should('be.visible');
    cy.contains('R 750 000').should('be.visible');
    cy.contains('-5% overrun risk').should('be.visible');
    cy.contains('Workforce Development Metrics').should('be.visible');
    cy.contains('78%').should('be.visible');
    cy.contains('+12% certified').should('be.visible');
    cy.contains('AI-Powered Strategic Insights').should('be.visible');
    cy.contains('What-If Scenarios').should('be.visible');
    cy.contains('Impact on system uptime: -3%').should('be.visible');
    cy.contains('Natural Language Query').should('be.visible');
    cy.contains('5 HVAC units').should('be.visible');
    cy.get('.bg-white.shadow-lg').should('have.length', 7);
    cy.get('.border-l-4').should('have.length', 7);
    cy.contains('Try Query').click();
    cy.get('a[href="/"]').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('navigates to Intelligence Metrics dashboard and verifies content', () => {
    cy.visit('/');
    cy.get('a[href="/strategic-intelligence/intelligence-metrics"]').click();
    cy.contains('Intelligence Metrics Dashboard').should('be.visible');
    cy.contains('Real-Time Operational Visibility').should('be.visible');
    cy.contains('Real-Time Performance Analytics').should('be.visible');
    cy.contains('95%').should('be.visible');
    cy.contains('+2% uptime').should('be.visible');
    cy.contains('Occupancy & Space Utilization').should('be.visible');
    cy.contains('82%').should('be.visible');
    cy.contains('+5% efficiency').should('be.visible');
    cy.contains('Energy & Resource Monitoring').should('be.visible');
    cy.contains('12 000 kWh').should('be.visible');
    cy.contains('-10% waste').should('be.visible');
    cy.contains('Health, Safety & Compliance Alerts').should('be.visible');
    cy.contains('98%').should('be.visible');
    cy.contains('100% compliant').should('be.visible');
    cy.contains('Work Order Efficiency Metrics').should('be.visible');
    cy.contains('85%').should('be.visible');
    cy.contains('-15% repeat requests').should('be.visible');
    cy.contains('AI-Powered Insights').should('be.visible');
    cy.contains('Predictive Maintenance').should('be.visible');
    cy.contains('2 pumps at risk').should('be.visible');
    cy.contains('Chatbot Interface').should('be.visible');
    cy.contains('Spike detected in HVAC').should('be.visible');
    cy.get('.bg-white.shadow-lg').should('have.length', 7);
    cy.get('.border-l-4').should('have.length', 7);
    cy.contains('Try Chatbot').click();
    cy.get('a[href="/"]').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('navigates to Integrated Intelligence Framework dashboard and verifies content', () => {
    cy.visit('/');
    cy.get('a[href="/strategic-intelligence/integrated-framework"]').click();
    cy.contains('Integrated Intelligence Framework Dashboard').should('be.visible');
    cy.contains('Central Hub for Data Unification').should('be.visible');
    cy.contains('Unified Data Management').should('be.visible');
    cy.contains('100%').should('be.visible');
    cy.contains('Full integration').should('be.visible');
    cy.contains('Centralized Document Control').should('be.visible');
    cy.contains('250 docs').should('be.visible');
    cy.contains('+50 docs').should('be.visible');
    cy.contains('Knowledge Graph of Assets').should('be.visible');
    cy.contains('300 assets').should('be.visible');
    cy.contains('+20 assets').should('be.visible');
    cy.contains('Smart Alerts & Decision Support').should('be.visible');
    cy.contains('90%').should('be.visible');
    cy.contains('5 alerts resolved').should('be.visible');
    cy.contains('Cross-System Analytics').should('be.visible');
    cy.contains('95%').should('be.visible');
    cy.contains('+3% correlation').should('be.visible');
    cy.contains('AI-Powered Framework').should('be.visible');
    cy.contains('Cognitive Layer').should('be.visible');
    cy.contains('Maintenance cost vs. uptime').should('be.visible');
    cy.contains('AI Reporting Assistant').should('be.visible');
    cy.contains('Q1 audit summary').should('be.visible');
    cy.get('.bg-white.shadow-lg').should('have.length', 7);
    cy.get('.border-l-4').should('have.length', 7);
    cy.contains('Generate Report').click();
    cy.get('a[href="/"]').click();
    cy.url().should('eq', 'http://localhost:3000/');
  });

  it('navigates to Facilities Management Dashboards', () => {
    cy.visit('/');
    const routes = [
      '/derivco-facilities/administration-portal',
      '/derivco-facilities/smart-insights',
      '/derivco-facilities/inventory-system',
      '/derivco-facilities/equipment-tracking',
      '/derivco-facilities/performance-kpis',
      '/derivco-facilities/medical-services',
      '/derivco-facilities/concierge-services',
      '/derivco-facilities/news-training',
      '/derivco-facilities/sifiso-methodology',
    ];
    routes.forEach(route => {
      cy.get(`a[href="${route}"]`).click();
      cy.contains(`${route.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} Dashboard`).should('be.visible');
      cy.get('a[href="/"]').click();
      cy.url().should('eq', 'http://localhost:3000/');
    });
  });

  it('navigates to Service Providers dashboards', () => {
    cy.visit('/');
    const routes = [
      '/service-providers/leitch-landscape',
      '/service-providers/sabeliwe-garden-services',
      '/service-providers/csg-foods',
      '/service-providers/livclean-hygiene-services',
      '/service-providers/mvula-security',
    ];
    routes.forEach(route => {
      cy.get(`a[href="${route}"]`).click();
      cy.contains(`${route.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} Dashboard`).should('be.visible');
      cy.get('a[href="/"]').click();
      cy.url().should('eq', 'http://localhost:3000/');
    });
  });
});