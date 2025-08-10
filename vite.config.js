import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),

        // About PallyFlo
        about: resolve(__dirname, 'about-pallyflo/index.html'),
        whoWeAre: resolve(__dirname, 'about-pallyflo/who-we-are.html'),
        whatWeDo: resolve(__dirname, 'about-pallyflo/what-we-do.html'),
        mission: resolve(__dirname, 'about-pallyflo/mission.html'),
        vision: resolve(__dirname, 'about-pallyflo/vision.html'),
        values: resolve(__dirname, 'about-pallyflo/values.html'),

        // Services
        services: resolve(__dirname, 'services/index.html'),
        trade: resolve(__dirname, 'services/trade-across-borders.html'),
        distributing: resolve(__dirname, 'services/distributing.html'),
        marketResearch: resolve(__dirname, 'services/market-research.html'),
        collaboration: resolve(__dirname, 'services/collaboration-strategy.html'),
        shipment: resolve(__dirname, 'services/shipment.html'),
        quality: resolve(__dirname, 'services/quality-assurance.html'),

        // Products
        products: resolve(__dirname, 'products/index.html'),
        lentils: resolve(__dirname, 'products/lentils.html'),
        beans: resolve(__dirname, 'products/beans.html'),
        peas: resolve(__dirname, 'products/peas.html'),
        oilSeeds: resolve(__dirname, 'products/oil-seeds.html'),
        cereals: resolve(__dirname, 'products/cereals-specialty-crops.html'),

        // Work With Us
        workWithUs: resolve(__dirname, 'work-with-us/index.html'),
        businessInquiries: resolve(__dirname, 'work-with-us/business-inquiries.html'),
        proposals: resolve(__dirname, 'work-with-us/proposal-guidelines.html'),

        // Reach Us
        reachUs: resolve(__dirname, 'reach-us/index.html'),

        // Careers
        careers: resolve(__dirname, 'careers/index.html'),

        // More
        more: resolve(__dirname, 'more/index.html')
      }
    }
  }
})
