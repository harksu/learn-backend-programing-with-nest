import Mail = require('nodemailer/lib/mailer');
import * as nodemailer from 'nodemailer';

import { Injectable } from '@nestjs/common';

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

@Injectable()
export class EmailService {
  private transporter: Mail;

  constructor() {
    this.transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'test',
        pass: 'test',
      },
    });
  }

  async sendMemberJoinVerification(
    emailAddress: string,
    signupVerifyToken: string,
  ) {
    const baseUrl = 'http://localhost:3000';

    const url = `${baseUrl}/user/email-verify?signupVerifyToken=${signupVerifyToken}`;
    //oauth?
    const mailOptions = {
      to: emailAddress,
      subject: '가입 인증 메일',
      html: `
          가입확인 버튼을 누르시면 가입 인증이 완료됩니다.<br />
          <form action='${url}' method='POST'>
            <button type='submit'>가입확인</button>
          </form>
        `,
    };

    return await this.transporter.sendMail(mailOptions);
  }
}
