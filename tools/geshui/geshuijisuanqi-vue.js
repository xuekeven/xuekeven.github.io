const app = new Vue({
  el: '#jisuanqi-vue',
  data: {
    city: '',
    wages: 0,

    SocialSecurityBase: 0,
    EndowmentInsuranceProportion: 8,
    EndowmentInsuranceProportion_Company: 16,
    MedicalInsuranceProportion: 2,
    MedicalInsuranceProportion_Extra: 0,
    MedicalInsuranceProportion_Company: 10,
    UnemploymentInsuranceProportion: 0.2,
    UnemploymentInsuranceProportion_Company: 0.8,
    EmploymentInjuryInsuranceProportion_Company: 0.4,
    MaternityInsuranceProportion_Company: 0.8,

    HousingProvidentFundBase: 0,
    HousingProvidentFundProportion: 8,

    PersonalIncomeTaxRate: 3
  },
  computed: {
    EndowmentInsurance: function () {
      let result = this.SocialSecurityBase * this.EndowmentInsuranceProportion * 0.01
      if (result <= 0) return 0
      return (result).toFixed(2)
    },
    EndowmentInsurance_Company: function () {
      let result = this.SocialSecurityBase * this.EndowmentInsuranceProportion_Company * 0.01
      if (result <= 0) return 0
      return (result).toFixed(2)
    },
    MedicalInsurance: function () {
      let result = this.SocialSecurityBase * this.MedicalInsuranceProportion * 0.01 + this.MedicalInsuranceProportion_Extra
      if (result <= 0) return 0
      return (result).toFixed(2)
    },
    MedicalInsurance_Company: function () {
      let result = this.SocialSecurityBase * this.MedicalInsuranceProportion_Company * 0.01
      if (result <= 0) return 0
      return (result).toFixed(2)
    },
    UnemploymentInsurance: function () {
      let result = this.SocialSecurityBase * this.UnemploymentInsuranceProportion * 0.01
      if (result <= 0) return 0
      return (result).toFixed(2)
    },
    UnemploymentInsurance_Company: function () {
      let result = this.SocialSecurityBase * this.UnemploymentInsuranceProportion_Company * 0.01
      if (result <= 0) return 0
      return (result).toFixed(2)
    },
    EmploymentInjuryInsurance_Company: function () {
      let result = this.SocialSecurityBase * this.EmploymentInjuryInsuranceProportion_Company * 0.01
      if (result <= 0) return 0
      return (result).toFixed(2)
    },
    MaternityInsurance_Company: function () {
      let result = this.SocialSecurityBase * this.MaternityInsuranceProportion_Company * 0.01
      if (result <= 0) return 0
      return (result).toFixed(2)
    },
    HousingProvidentFund: function () {
      let result = this.HousingProvidentFundBase * this.HousingProvidentFundProportion * 0.01
      if (result <= 0) return 0
      return (result).toFixed(2)
    },
    IncomeTaxPayableOnIndividualIncomeTax: function () {
      let result = this.wages - this.EndowmentInsurance - this.MedicalInsurance - this.UnemploymentInsurance - this.HousingProvidentFund - 5000
      if (result <= 0) return 0
      return (result).toFixed(2)
    },
    PersonalIncomeTaxPayable: function () {
      let result = this.IncomeTaxPayableOnIndividualIncomeTax * this.PersonalIncomeTaxRate * 0.01
      if (result <= 0) return 0
      return (result).toFixed(2)
    },
    WagesInHand: function () {
      let result = this.wages - this.EndowmentInsurance - this.MedicalInsurance - this.UnemploymentInsurance - this.HousingProvidentFund - this.PersonalIncomeTaxPayable
      if (result <= 0) return 0
      return (result).toFixed(2)
    },
    TotalHousingProvidentFund: function () {
      let result = this.HousingProvidentFund * 2
      if (result <= 0) return 0
      return (result).toFixed(2)
    },
    WagesInHandAddTotalHousingProvidentFund: function () {
      let result = Number(this.WagesInHand) + Number(this.TotalHousingProvidentFund)
      if (result <= 0) return 0
      return (result).toFixed(2)
    }
  },
  watch: {
    city: function (now, old) {
      switch (now) {
        case '北京':
          this.SocialSecurityBase = 5360
          this.EndowmentInsuranceProportion = 8
          this.EndowmentInsuranceProportion_Company = 16
          this.MedicalInsuranceProportion = 2
          this.MedicalInsuranceProportion_Extra = 3
          this.MedicalInsuranceProportion_Company = 10.8
          this.UnemploymentInsuranceProportion = 0.5
          this.UnemploymentInsuranceProportion_Company = 0.5
          this.EmploymentInjuryInsuranceProportion_Company = 0.2
          this.MaternityInsuranceProportion_Company = 0
          this.HousingProvidentFundProportion = 12
          break
        case '成都':
          this.SocialSecurityBase = 3726
          this.EndowmentInsuranceProportion = 8
          this.EndowmentInsuranceProportion_Company = 16
          this.MedicalInsuranceProportion = 2
          this.MedicalInsuranceProportion_Extra = 0
          this.MedicalInsuranceProportion_Company = 7.5
          this.UnemploymentInsuranceProportion = 0.4
          this.UnemploymentInsuranceProportion_Company = 0.6
          this.EmploymentInjuryInsuranceProportion_Company = 0.2
          this.MaternityInsuranceProportion_Company = 0.8
          this.HousingProvidentFundProportion = 8
          break
        case '其它':
          this.SocialSecurityBase = 0
          this.EndowmentInsuranceProportion = 8
          this.EndowmentInsuranceProportion_Company = 16
          this.MedicalInsuranceProportion = 2
          this.MedicalInsuranceProportion_Extra = 0
          this.MedicalInsuranceProportion_Company = 10
          this.UnemploymentInsuranceProportion = 0.2
          this.UnemploymentInsuranceProportion_Company = 0.8
          this.EmploymentInjuryInsuranceProportion_Company = 0.4
          this.MaternityInsuranceProportion_Company = 0.8
          this.HousingProvidentFundProportion = 8
      }
    }
  }
})