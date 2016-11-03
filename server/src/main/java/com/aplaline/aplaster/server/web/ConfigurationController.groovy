package com.aplaline.aplaster.server.web

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RequestMethod
import org.springframework.web.bind.annotation.ResponseBody

@Controller
@RequestMapping(path = "/api/config", produces = "application/json")
class ConfigurationController {
    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody String getConfiguration() {
        return [ message: 'Hello, world!' ];
    }
}
