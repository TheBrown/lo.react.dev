/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 */

exports.siteConfig = {
  version: '19.3',
  // --------------------------------------
  // Translations should replace these lines:
  languageCode: 'lo',
  hasLegacySite: true,
  isRTL: false,
  // --------------------------------------
  copyright: `Copyright © ${new Date().getFullYear()} Facebook Inc. All Rights Reserved.`,
  repoUrl: 'https://github.com/react/react',
  twitterUrl: 'https://twitter.com/reactjs',
  algolia: {
    appId: '1FCF9AYYAT',
    apiKey: 'e8451218980a351815563de007648b00',
    indexName: 'beta-react',
  },
};
