describe('Landing Page', () => {
  it('displays hero, charts, card sections, and progress bar', () => {
    cy.visit('/');
    cy.contains('FACILITIES MANAGEMENT SYSTEM').should('be.visible');
    cy.contains('Stewardship in facility management').should('be.visible');
    cy.contains('Completion Rates by Service').should('be.visible');
    cy.contains('Performance Metrics').should('be.visible');
    cy.contains('Strategic Facilities Intelligence').should('be.visible');
    cy.contains('Facilities Management Dashboards').should('be.visible');
    cy.contains('Service Providers').should('be.visible');
    cy.get('.bg-white\\/10.backdrop-blur-md').should('have.length', 9); // Strategic dashboards
    cy.get('.shadow-lg.border-2').should('have.length', 9); // Facilities dashboards
    cy.get('.border-t-4').should('have.length', 5); // Service providers
    cy.get('[data-testid="bprogress"]').should('be.visible'); // Progress bar
  });

  it('navigates to Strategic Facilities Intelligence dashboards', () => {
    cy.visit('/');
    const routes = [
      '/strategic-intelligence/strategic-management',
      '/strategic-intelligence/intelligence-metrics',
      '/strategic-intelligence/integrated-framework',
      '/strategic-intelligence/global-fm-intelligence',
      '/strategic-intelligence/kpi-dashboard',
      '/strategic-intelligence/procurement-intelligence',
      '/strategic-intelligence/sustainability-ledger',
      '/strategic-intelligence/stewardship-charter',
      '/strategic-intelligence/training-module',
    ];
    routes.forEach(route => {
      cy.get(`a[href="${route}"]`).click();
      cy.contains(`${route.split('/').pop().replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} Dashboard`).should('be.visible');
      cy.get('a[href="/"]').click();
      cy.url().should('eq', 'http://localhost:3000/');
    });
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