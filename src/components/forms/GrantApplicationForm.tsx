'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'

interface GrantApplicationData {
  // Basic Information
  projectTitle: string
  applicantName: string
  organisationContact: string
  contactAddress: string
  postcode: string
  telephone: string
  email: string
  
  // Project Details
  purposeSummary: string
  detailedPurpose: string
  alignmentWithObjectives: string
  longTermBenefits: string
  
  // Financial Information
  grantAmount: string
  partialFunding: string
  fundingBalance: string
  
  // Supporting Documents
  hasConstitution: boolean
  hasFinancialSummary: boolean
  hasEqualityPolicies: boolean
  
  // Additional Information
  additionalInfo: string
}

export function GrantApplicationForm() {
  const [formData, setFormData] = useState<GrantApplicationData>({
    projectTitle: '',
    applicantName: '',
    organisationContact: '',
    contactAddress: '',
    postcode: '',
    telephone: '',
    email: '',
    purposeSummary: '',
    detailedPurpose: '',
    alignmentWithObjectives: '',
    longTermBenefits: '',
    grantAmount: '',
    partialFunding: '',
    fundingBalance: '',
    hasConstitution: false,
    hasFinancialSummary: false,
    hasEqualityPolicies: false,
    additionalInfo: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Here you would typically send the form data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-forest-700 mb-4">
          Application Submitted Successfully
        </h2>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Thank you for your grant application. We have received your submission and will review it 
          at our next quarterly grants committee meeting. You will be contacted with the outcome.
        </p>
        <Button variant="primary" onClick={() => setSubmitStatus('idle')}>
          Submit Another Application
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-display font-bold text-forest-700 mb-4">
          Grant Application Form
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Please complete all sections of this form. Fields marked with * are required.
        </p>
      </div>

      {/* Basic Information */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-forest-700 mb-6 border-b border-gray-200 pb-2">
          Basic Information
        </h3>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="projectTitle" className="block text-sm font-medium text-gray-700 mb-2">
              Project Title (if appropriate)
            </label>
            <input
              type="text"
              id="projectTitle"
              name="projectTitle"
              value={formData.projectTitle}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="applicantName" className="block text-sm font-medium text-gray-700 mb-2">
              Name of Individual/Organisation *
            </label>
            <input
              type="text"
              id="applicantName"
              name="applicantName"
              value={formData.applicantName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="organisationContact" className="block text-sm font-medium text-gray-700 mb-2">
              For an organisation, person preparing application
            </label>
            <input
              type="text"
              id="organisationContact"
              name="organisationContact"
              value={formData.organisationContact}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-2">
              Post Code *
            </label>
            <input
              type="text"
              id="postcode"
              name="postcode"
              value={formData.postcode}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
              Telephone *
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
            />
          </div>
        </div>
        
        <div className="mt-6">
          <label htmlFor="contactAddress" className="block text-sm font-medium text-gray-700 mb-2">
            Contact Address *
          </label>
          <textarea
            id="contactAddress"
            name="contactAddress"
            value={formData.contactAddress}
            onChange={handleChange}
            required
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
          />
        </div>
      </Card>

      {/* Project Details */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-forest-700 mb-6 border-b border-gray-200 pb-2">
          Project Details
        </h3>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="purposeSummary" className="block text-sm font-medium text-gray-700 mb-2">
              Summary of purpose for which grant requested, who will benefit and how they will benefit *
            </label>
            <textarea
              id="purposeSummary"
              name="purposeSummary"
              value={formData.purposeSummary}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
              placeholder="Please provide a clear summary of your project..."
            />
          </div>
          
          <div>
            <label htmlFor="detailedPurpose" className="block text-sm font-medium text-gray-700 mb-2">
              Detailed project information
            </label>
            <textarea
              id="detailedPurpose"
              name="detailedPurpose"
              value={formData.detailedPurpose}
              onChange={handleChange}
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
              placeholder="Please provide detailed scope, objectives, benefits, timescale, people involved, costs including details of other funding, etc."
            />
          </div>
          
          <div>
            <label htmlFor="alignmentWithObjectives" className="block text-sm font-medium text-gray-700 mb-2">
              How does the application fit with the Pilton Green Man CIO's objectives? *
            </label>
            <textarea
              id="alignmentWithObjectives"
              name="alignmentWithObjectives"
              value={formData.alignmentWithObjectives}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
              placeholder="Explain how your project aligns with our objectives..."
            />
          </div>
          
          <div>
            <label htmlFor="longTermBenefits" className="block text-sm font-medium text-gray-700 mb-2">
              Long term benefits to the Pilton community *
            </label>
            <textarea
              id="longTermBenefits"
              name="longTermBenefits"
              value={formData.longTermBenefits}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
              placeholder="How do you expect the project to bring long term benefits to the Pilton community?"
            />
          </div>
        </div>
      </Card>

      {/* Financial Information */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-forest-700 mb-6 border-b border-gray-200 pb-2">
          Financial Information
        </h3>
        
        <div className="space-y-6">
          <div>
            <label htmlFor="grantAmount" className="block text-sm font-medium text-gray-700 mb-2">
              Amount applied for (£) *
            </label>
            <input
              type="number"
              id="grantAmount"
              name="grantAmount"
              value={formData.grantAmount}
              onChange={handleChange}
              required
              min="1"
              max="1000"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
              placeholder="Maximum £1000 for organisations, £250 for individuals"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Is this application for only part of the total sum required?
            </label>
            <div className="flex items-center space-x-4 mb-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="partialFunding"
                  value="no"
                  checked={formData.partialFunding === 'no'}
                  onChange={handleChange}
                  className="mr-2"
                />
                No - this covers the full project cost
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="partialFunding"
                  value="yes"
                  checked={formData.partialFunding === 'yes'}
                  onChange={handleChange}
                  className="mr-2"
                />
                Yes - additional funding is needed
              </label>
            </div>
            
            {formData.partialFunding === 'yes' && (
              <div>
                <label htmlFor="fundingBalance" className="block text-sm font-medium text-gray-700 mb-2">
                  How is the balance of monies being or will be raised? *
                </label>
                <textarea
                  id="fundingBalance"
                  name="fundingBalance"
                  value={formData.fundingBalance}
                  onChange={handleChange}
                  required={formData.partialFunding === 'yes'}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
                  placeholder="Please summarise your other funding sources..."
                />
              </div>
            )}
          </div>
        </div>
      </Card>

      {/* Supporting Documents */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-forest-700 mb-6 border-b border-gray-200 pb-2">
          Supporting Documents
        </h3>
        
        <div className="space-y-4">
          <p className="text-sm text-gray-600 mb-4">
            Please indicate which supporting documents you will provide (if appropriate for organisations):
          </p>
          
          <div className="space-y-3">
            <label className="flex items-center">
              <input
                type="checkbox"
                name="hasConstitution"
                checked={formData.hasConstitution}
                onChange={handleChange}
                className="mr-3 rounded"
              />
              <span className="text-sm">Constitution or organisation structure</span>
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                name="hasFinancialSummary"
                checked={formData.hasFinancialSummary}
                onChange={handleChange}
                className="mr-3 rounded"
              />
              <span className="text-sm">Annual income/expenditure summary</span>
            </label>
            
            <label className="flex items-center">
              <input
                type="checkbox"
                name="hasEqualityPolicies"
                checked={formData.hasEqualityPolicies}
                onChange={handleChange}
                className="mr-3 rounded"
              />
              <span className="text-sm">Equal Opportunity and Vulnerable Persons Policies</span>
            </label>
          </div>
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-4">
            <p className="text-sm text-amber-800">
              <strong>Note:</strong> Supporting documents should be submitted separately via email or post. 
              Contact details will be provided after form submission.
            </p>
          </div>
        </div>
      </Card>

      {/* Additional Information */}
      <Card className="p-6">
        <h3 className="text-xl font-semibold text-forest-700 mb-6 border-b border-gray-200 pb-2">
          Additional Information
        </h3>
        
        <div>
          <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
            Any additional information you would like to provide
          </label>
          <textarea
            id="additionalInfo"
            name="additionalInfo"
            value={formData.additionalInfo}
            onChange={handleChange}
            rows={4}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-forest-500 focus:border-transparent"
            placeholder="Please provide any additional information that supports your application..."
          />
        </div>
      </Card>

      {/* Important Information */}
      <Card className="p-6 bg-forest-50">
        <h3 className="text-lg font-semibold text-forest-700 mb-4">
          Important Information
        </h3>
        <ul className="space-y-2 text-sm text-gray-700">
          <li>• We suggest contacting the CIO to discuss your ideas before submitting an application</li>
          <li>• Applications are reviewed quarterly (October, January, April, July)</li>
          <li>• A short report (1 page) is required upon project completion</li>
          <li>• Significant changes to scope or timescale may result in grant withdrawal</li>
        </ul>
      </Card>

      {/* Submit Button */}
      <div className="text-center pt-6">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          disabled={isSubmitting}
          className="px-12"
        >
          {isSubmitting ? 'Submitting Application...' : 'Submit Grant Application'}
        </Button>
      </div>

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
          <p className="text-red-800 text-center">
            There was an error submitting your application. Please try again or contact us directly.
          </p>
        </div>
      )}
    </form>
  )
}