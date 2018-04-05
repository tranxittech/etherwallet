// Greek
'use strict';
var el = function() {}
el.code = 'el';
el.data = {

GEN_Help_0                      :  'Already have a wallet somewhere?',
GEN_Help_MetaMask               :  'So easy! Keys stay in MetaMask, not on a phishing site! Try it today.',

GEN_Warning_1                   :  '**Do not lose it!** It cannot be recovered if you lose it.',
GEN_Warning_2                   :  '**Do not share it!** Your funds will be stolen if you use this file on a malicious/phishing site.',
GEN_Warning_3                   :  '**Make a backup!** Secure it like the millions of dollars it may one day be worth.',

GAS_Price_1                     : 'Not So Fast',
GAS_Price_2                     : 'Fast',
GAS_Price_3                     : 'Fast AF',

CONTRACT_Helper_1               :  'Please change the address to your own Multisig Contract Address.',
CONTRACT_Warning_1              :  'You are about to **deploy a contract**.',
CONTRACT_Warning_2              :  'It will be deployed on the following network:',
CONTRACT_Warning_3              :  'You are about to **execute a function on contract**.',

SEND_Helper_Contract            :  'In most cases you should leave this as 0.',
SEND_ViewOnly                   :  'You cannot send with only your address. You must use one of the other options to unlock your wallet in order to send.',
SEND_LoadTokens                 :  'Load Tokens',
SEND_CustomAddrMsg              :  'A message regarding',

SWAP_Warning_1                  :  'Warning! You do not have enough funds to complete this swap.',
SWAP_Warning_2                  :  'Please add more funds to your wallet or access a different wallet.',

X_Advanced                      :  'Advanced Users Only.',
X_HelpfulLinks                  :  'Helpful Links & FAQs',
X_HelpfulLinks_1                :  'How to Access your Wallet',
X_HelpfulLinks_2                :  'I lost my private key',
X_HelpfulLinks_3                :  'My private key opens a different address',
X_HelpfulLinks_4                :  'Migrating to/from ViceCoinWallet',
X_Network                       :  'Network', // aka "node" or "chain" - used in the dropdown in header
X_Network_Custom                :  'Add Custom Network / Node',

DOMAIN_Buy                      :  'Buy the domain',
DOMAIN_BuyItNow                 :  'Price to buy the domain immediately:',
DOMAIN_bid                      :  'Bid for the domain',
DOMAIN_bid_0                    :  'You are currently winning this auction with the highest bid. You can bid higher if you want, but it will delay the close of the auction for 24 hours.',
DOMAIN_bid_1                    :  'Bid at least',
DOMAIN_bid_2                    :  'on the domain.',
DOMAIN_bid_3                    :  'You will win the domain if no higher bids are placed within the next 24 hours.',
DOMAIN_bid_4                    :  'Note that the domain has a locked value of',
DOMAIN_bid_5                    :  'As part of the sale you will receive the deed with this value but cannot claim it unless you release the name.',
DOMAIN_Finish_1                 :  'Not related to that auction',
DOMAIN_Finish_2                 :  'This address is neither the winner nor the seller of the auction.',
DOMAIN_Finish_3                 :  'Finish the auction',
DOMAIN_Finish_4                 :  'Finish the auction to allocate the domain to the winner and the funds to the seller.',
DOMAIN_Finish_5                 :  'Click your TX hash to see if you successfully transferred the domain to DomainSale.',
DOMAIN_offer_4                  :  'Offer For Sale:',
DOMAIN_offer_5                  :  'Set either of both of the prices below to offer your domain for sale.  Remember that any funds you have locked in the domain\'s deed will go to the buyer and 10% of the funds when sold goes to referrers.',
DOMAIN_offer_7                  :  'Alter Your Offer for:',
DOMAIN_offer_8                  :  'Change either of both of the prices below to alter your domain sale offer.  Remember that any funds you have locked in the domain\'s deed will go to the buyer and 10% of the funds when sold goes to referrers.',
DOMAIN_offer_9                  :  'Buy price',
DOMAIN_offer_10                 :  'This is the price at woinWallet.com). ',
HELP_Sec_Desc_5             : 'For generating wallets, you can download the [source code and run it locally](https://github.com/kvhnuke/etherwallet/releases/latest). See #5 above. ',
HELP_Sec_Desc_6             : 'Generate a test wallet and check and see what network activity is happening. The easiest way for you to do this is to right click on the page and click "inspect element". Go to the "Network" tab. Generate a test wallet. You will see there is no network activity. You may see something happening that looks like data:image/gif and data:image/png. Those are the QR codes being generated...on your computer...by your computer. No bytes were transferred. ',
HELP_Sec_Desc_8             : 'If you do not feel comfortable using this tool, then by all means, do not use it. We created this tool as a helpful way for people to generate wallets and make transactions without needing to dive into command line or run a full node. Again, feel free to reach out if you have concerns and we will respond as quickly as possible. Thanks! ',

HELP_FAQ_Title              : 'Περισσότερες χρήσιμες απαντήσεις σε συχνές ερωτήσεις ',
HELP_Contact_Title          : 'Τρόποι για να έρθετε σε επαφή'
};

module.exports = el;
